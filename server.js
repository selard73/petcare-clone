const http = require("http");
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
let DatabaseSync = null;
try {
  ({ DatabaseSync } = require("node:sqlite"));
} catch {
  DatabaseSync = null;
}

const PORT = Number(process.env.PORT) || 5600;
const ROOT = __dirname;
const PUBLIC_DIR = path.join(ROOT, "public");
const AIRTABLE_DB_FILE = path.join(ROOT, "data", "airtable.json");
const SQLITE_DB_FILE = path.join(ROOT, "data", "petcare.db");
const STATS_FILE = path.join(ROOT, "data", "stats.json");
const VISIT_COUNT_KEY = "homepage_visits";
const REVIEW_NOTIFY_TO = process.env.REVIEW_NOTIFY_EMAIL || "selard73@gmail.com";
const REVIEW_NOTIFY_FROM =
  process.env.REVIEW_NOTIFY_FROM || "Pawsitively Fabulous <selard73@gmail.com>";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const SMTP_HOST = process.env.SMTP_HOST || "";
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";

let nodemailer = null;
try {
  nodemailer = require("nodemailer");
} catch {
  nodemailer = null;
}

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
};

let writeQueue = Promise.resolve();
let sqlite;
let usingSqlite = false;

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(payload));
}

function sendText(res, statusCode, message) {
  res.writeHead(statusCode, {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(message);
}

function sanitizePath(urlPath) {
  const pathname = decodeURIComponent(urlPath.split("?")[0]);
  const normalized = path.normalize(pathname === "/" ? "/index.html" : pathname);
  const fullPath = path.join(PUBLIC_DIR, normalized);
  if (!fullPath.startsWith(PUBLIC_DIR)) {
    return null;
  }
  return fullPath;
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      if (chunks.length === 0) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });
    req.on("error", reject);
  });
}

function toAirtableShape(input) {
  return {
    id: String(input.id || generateRecordId()),
    fields: typeof input.fields === "object" && input.fields ? input.fields : {},
    createdTime: input.createdTime || input.created_time || new Date().toISOString(),
  };
}

async function readAirtableDb() {
  const raw = await fsp.readFile(AIRTABLE_DB_FILE, "utf8");
  const parsed = JSON.parse(raw);
  if (!parsed || !Array.isArray(parsed.records)) {
    return { records: [] };
  }
  return parsed;
}

async function writeAirtableDb(data) {
  const tempFile = `${AIRTABLE_DB_FILE}.tmp`;
  const content = `${JSON.stringify(data, null, 2)}\n`;
  writeQueue = writeQueue.then(async () => {
    await fsp.writeFile(tempFile, content, "utf8");
    await fsp.rename(tempFile, AIRTABLE_DB_FILE);
  });
  return writeQueue;
}

function generateRecordId() {
  return `rec${crypto.randomBytes(7).toString("hex")}`;
}

function normalizeRecord(input) {
  return toAirtableShape(input);
}

function parseFormula(formula = "") {
  const match = formula.match(/^\{([^}]+)\}="?(.+?)"?$/);
  if (!match) return null;
  return { field: match[1], value: match[2] };
}

function matchesFormula(record, formula) {
  if (!formula) return true;
  const parsed = parseFormula(formula);
  if (!parsed) return true;
  const candidate = record.fields?.[parsed.field];
  return String(candidate ?? "") === parsed.value;
}

function filterRecords(records, searchParams) {
  const formula = searchParams.get("filterByFormula") || "";
  return records.filter((record) => matchesFormula(record, formula));
}

function parseFieldsJson(text) {
  try {
    return JSON.parse(text || "{}");
  } catch {
    return {};
  }
}

function rowToRecord(row) {
  return toAirtableShape({
    id: row.id,
    fields: parseFieldsJson(row.fields_json),
    created_time: row.created_time,
  });
}

function migrateLegacyJsonToSqliteIfNeeded() {
  if (!sqlite) return;
  const countRow = sqlite.prepare("SELECT COUNT(*) AS count FROM airtable_records").get();
  if ((countRow?.count || 0) > 0 || !fs.existsSync(AIRTABLE_DB_FILE)) {
    return;
  }

  try {
    const raw = fs.readFileSync(AIRTABLE_DB_FILE, "utf8");
    const parsed = JSON.parse(raw);
    const records = Array.isArray(parsed?.records) ? parsed.records : [];
    if (records.length === 0) return;

    const insert = sqlite.prepare(
      "INSERT OR REPLACE INTO airtable_records (id, created_time, fields_json) VALUES (?, ?, ?)",
    );
    for (const item of records) {
      const record = normalizeRecord(item);
      insert.run(record.id, record.createdTime, JSON.stringify(record.fields || {}));
    }
  } catch (error) {
    console.error("Legacy JSON migration skipped due to error:", error.message);
  }
}

function initSqlite() {
  if (!DatabaseSync) {
    usingSqlite = false;
    return;
  }
  sqlite = new DatabaseSync(SQLITE_DB_FILE);
  sqlite.exec(
    `
    CREATE TABLE IF NOT EXISTS airtable_records (
      id TEXT PRIMARY KEY,
      created_time TEXT NOT NULL,
      fields_json TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_airtable_created_time ON airtable_records(created_time DESC);
    CREATE TABLE IF NOT EXISTS site_stats (
      key TEXT PRIMARY KEY,
      value INTEGER NOT NULL
    );
    `,
  );
  const visitRow = sqlite.prepare("SELECT value FROM site_stats WHERE key = ?").get(VISIT_COUNT_KEY);
  if (!visitRow) {
    sqlite.prepare("INSERT INTO site_stats (key, value) VALUES (?, 0)").run(VISIT_COUNT_KEY);
  }
  migrateLegacyJsonToSqliteIfNeeded();
  usingSqlite = true;
}

async function readStatsFile() {
  try {
    const raw = await fsp.readFile(STATS_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return typeof parsed.visits === "number" ? parsed : { visits: 0 };
  } catch {
    return { visits: 0 };
  }
}

async function writeStatsFile(stats) {
  const tempFile = `${STATS_FILE}.tmp`;
  const content = `${JSON.stringify(stats, null, 2)}\n`;
  await fsp.writeFile(tempFile, content, "utf8");
  await fsp.rename(tempFile, STATS_FILE);
}

function getVisitCount() {
  if (usingSqlite) {
    const row = sqlite.prepare("SELECT value FROM site_stats WHERE key = ?").get(VISIT_COUNT_KEY);
    return row?.value ?? 0;
  }
  return null;
}

async function getVisitCountAsync() {
  if (usingSqlite) return getVisitCount();
  const stats = await readStatsFile();
  return stats.visits;
}

async function incrementVisitCount() {
  if (usingSqlite) {
    sqlite.prepare("UPDATE site_stats SET value = value + 1 WHERE key = ?").run(VISIT_COUNT_KEY);
    return getVisitCount();
  }
  const stats = await readStatsFile();
  stats.visits = (stats.visits || 0) + 1;
  await writeStatsFile(stats);
  return stats.visits;
}

async function handleVisitStatsApi(req, res) {
  if (req.method === "GET") {
    const visits = await getVisitCountAsync();
    sendJson(res, 200, { visits });
    return true;
  }
  if (req.method === "POST") {
    const visits = await incrementVisitCount();
    sendJson(res, 200, { visits });
    return true;
  }
  sendJson(res, 405, { error: "Method not allowed" });
  return true;
}

function isReviewRecord(fields = {}) {
  return String(fields.price || "").startsWith("REVIEW:");
}

function parseReviewFromFields(fields = {}) {
  try {
    const parsed = JSON.parse(fields.about || "{}");
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

function buildReviewNotificationEmail(action, fields = {}) {
  const review = parseReviewFromFields(fields) || {};
  const businessId = review.businessId || fields.name || "unknown business";
  const reviewer = review.userName || "Anonymous";
  const rating = review.rating ?? "n/a";
  const comment = String(review.comment || "").trim() || "(no comment)";
  const when = review.createdAt || new Date().toISOString();
  const actionLabel = action === "removed" ? "removed" : "added";
  const subject =
    action === "removed"
      ? `Review removed on Pawsitively Fabulous`
      : `New review on Pawsitively Fabulous`;
  const text = [
    `A review was ${actionLabel} on Pawsitively Fabulous.`,
    "",
    `Business ID: ${businessId}`,
    `Reviewer: ${reviewer}`,
    `Rating: ${rating}/5`,
    `Submitted: ${when}`,
    "",
    "Review:",
    comment,
  ].join("\n");
  return { subject, text };
}

async function sendViaResendEmail({ subject, text }) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: REVIEW_NOTIFY_FROM,
      to: [REVIEW_NOTIFY_TO],
      subject,
      text,
    }),
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend error (${response.status}): ${body}`);
  }
}

async function sendViaSmtpEmail({ subject, text }) {
  if (!nodemailer) {
    throw new Error("nodemailer is not installed");
  }
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
  await transporter.sendMail({
    from: REVIEW_NOTIFY_FROM,
    to: REVIEW_NOTIFY_TO,
    subject,
    text,
  });
}

async function sendReviewNotificationEmail(action, fields = {}) {
  if (!isReviewRecord(fields)) return;
  const payload = buildReviewNotificationEmail(action, fields);
  if (RESEND_API_KEY) {
    await sendViaResendEmail(payload);
    return;
  }
  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    await sendViaSmtpEmail(payload);
    return;
  }
  console.warn(
    "Review notification skipped: set RESEND_API_KEY or SMTP_HOST/SMTP_USER/SMTP_PASS on the server.",
  );
}

function queueReviewNotification(action, fields = {}) {
  sendReviewNotificationEmail(action, fields).catch((error) => {
    console.error("Review notification email failed:", error.message);
  });
}

async function listAllRecords() {
  if (usingSqlite) {
    const rows = sqlite.prepare("SELECT id, created_time, fields_json FROM airtable_records ORDER BY created_time DESC").all();
    return rows.map(rowToRecord);
  }
  const db = await readAirtableDb();
  return (db.records || []).map(normalizeRecord);
}

async function getRecordById(id) {
  if (usingSqlite) {
    const row = sqlite.prepare("SELECT id, created_time, fields_json FROM airtable_records WHERE id = ?").get(id);
    return row ? rowToRecord(row) : null;
  }
  const db = await readAirtableDb();
  return (db.records || []).map(normalizeRecord).find((record) => record.id === id) || null;
}

async function createRecords(records) {
  const normalized = records.map((record) => normalizeRecord(record));
  if (usingSqlite) {
    const insert = sqlite.prepare(
      "INSERT OR REPLACE INTO airtable_records (id, created_time, fields_json) VALUES (?, ?, ?)",
    );
    for (const item of normalized) {
      insert.run(item.id, item.createdTime, JSON.stringify(item.fields || {}));
    }
    return normalized;
  }
  const db = await readAirtableDb();
  const existing = new Map((db.records || []).map((record) => [record.id, normalizeRecord(record)]));
  for (const item of normalized) existing.set(item.id, item);
  await writeAirtableDb({ records: Array.from(existing.values()) });
  return normalized;
}

async function patchRecord(id, fields) {
  const current = await getRecordById(id);
  if (!current) return null;
  const next = {
    ...current,
    fields: { ...(current.fields || {}), ...(fields || {}) },
  };
  if (usingSqlite) {
    sqlite
      .prepare("UPDATE airtable_records SET fields_json = ? WHERE id = ?")
      .run(JSON.stringify(next.fields || {}), id);
  } else {
    const db = await readAirtableDb();
    const records = (db.records || []).map((record) => normalizeRecord(record));
    const idx = records.findIndex((record) => record.id === id);
    if (idx >= 0) {
      records[idx] = next;
      await writeAirtableDb({ records });
    }
  }
  return next;
}

async function deleteRecord(id) {
  if (usingSqlite) {
    const result = sqlite.prepare("DELETE FROM airtable_records WHERE id = ?").run(id);
    return (result.changes || 0) > 0;
  }
  const db = await readAirtableDb();
  const records = (db.records || []).map((record) => normalizeRecord(record));
  const next = records.filter((record) => record.id !== id);
  if (next.length === records.length) return false;
  await writeAirtableDb({ records: next });
  return true;
}

async function handleAirtableApi(req, res, url) {
  const method = req.method.toUpperCase();
  const id = url.pathname.replace("/api/airtable", "").replace(/^\//, "");

  if (method === "GET" && !id) {
    const allRecords = await listAllRecords();
    const records = filterRecords(allRecords, url.searchParams);
    sendJson(res, 200, { records });
    return true;
  }

  if (method === "GET" && id) {
    const record = await getRecordById(id);
    if (!record) {
      sendJson(res, 404, { error: { type: "NOT_FOUND", message: "Record not found" } });
      return true;
    }
    sendJson(res, 200, record);
    return true;
  }

  if (method === "POST" && !id) {
    const body = await parseBody(req);
    const created = await createRecords(Array.isArray(body.records) ? body.records : [body]);
    for (const record of created) {
      if (isReviewRecord(record.fields)) {
        queueReviewNotification("added", record.fields);
      }
    }
    sendJson(res, 200, Array.isArray(body.records) ? { records: created } : created[0]);
    return true;
  }

  if (method === "PATCH" && id) {
    const body = await parseBody(req);
    const next = await patchRecord(id, body.fields || {});
    if (!next) {
      sendJson(res, 404, { error: { type: "NOT_FOUND", message: "Record not found" } });
      return true;
    }
    sendJson(res, 200, next);
    return true;
  }

  if (method === "DELETE" && id) {
    const existing = await getRecordById(id);
    const deleted = await deleteRecord(id);
    if (!deleted) {
      sendJson(res, 404, { error: { type: "NOT_FOUND", message: "Record not found" } });
      return true;
    }
    if (existing && isReviewRecord(existing.fields)) {
      queueReviewNotification("removed", existing.fields);
    }
    sendJson(res, 200, { id, deleted: true });
    return true;
  }

  return false;
}

const server = http.createServer(async (req, res) => {
  try {
    if (!req.url || !req.method) {
      sendText(res, 400, "Bad request");
      return;
    }

    const url = new URL(req.url, "http://localhost");

    if (url.pathname === "/api/health") {
      sendJson(res, 200, { ok: true });
      return;
    }

    if (url.pathname === "/api/review-notify-test" && req.method.toUpperCase() === "GET") {
      try {
        const payload = buildReviewNotificationEmail("added", {
          price: "REVIEW:test-business",
          name: "test-business",
          about: JSON.stringify({
            businessId: "test-business",
            userName: "Email test",
            rating: 5,
            comment: "This is a test review notification from Pawsitively Fabulous.",
            createdAt: new Date().toISOString(),
          }),
        });
        if (RESEND_API_KEY) {
          await sendViaResendEmail(payload);
        } else if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
          await sendViaSmtpEmail(payload);
        } else {
          sendJson(res, 500, {
            ok: false,
            error: "Email is not configured on the server yet.",
            hint: "Add SMTP_HOST, SMTP_USER, and SMTP_PASS in Render Environment, then redeploy.",
          });
          return;
        }
        sendJson(res, 200, {
          ok: true,
          message: `Test email sent to ${REVIEW_NOTIFY_TO}`,
        });
      } catch (error) {
        sendJson(res, 500, {
          ok: false,
          error: error.message || "Failed to send test email",
        });
      }
      return;
    }

    if (url.pathname.startsWith("/api/airtable")) {
      const handled = await handleAirtableApi(req, res, url);
      if (handled) return;
    }

    if (url.pathname === "/api/stats/visits") {
      await handleVisitStatsApi(req, res);
      return;
    }

    const filePath = sanitizePath(url.pathname);
    if (!filePath) {
      sendText(res, 403, "Forbidden");
      return;
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        if (err.code === "ENOENT") {
          sendText(res, 404, "Not found");
          return;
        }
        sendText(res, 500, "Server error");
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || "application/octet-stream";
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    });
  } catch (error) {
    sendJson(res, 500, { error: error.message || "Unexpected error" });
  }
});

server.listen(PORT, () => {
  initSqlite();
  console.log(`Exact petcare clone running at http://localhost:${PORT}`);
  console.log(
    usingSqlite
      ? `Persistence backend: SQLite (${SQLITE_DB_FILE})`
      : `Persistence backend: JSON fallback (${AIRTABLE_DB_FILE})`,
  );
  console.log("Airtable writes are redirected to /api/airtable");
  console.log(`Review notifications target: ${REVIEW_NOTIFY_TO}`);
  if (RESEND_API_KEY) {
    console.log("Review notification email: Resend API");
  } else if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    console.log(`Review notification email: SMTP (${SMTP_HOST})`);
  } else {
    console.log("Review notification email: not configured (set RESEND_API_KEY or SMTP env vars)");
  }
});
