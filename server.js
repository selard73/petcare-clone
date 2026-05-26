const http = require("http");
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
const { DatabaseSync } = require("node:sqlite");

const PORT = Number(process.env.PORT) || 5600;
const ROOT = __dirname;
const PUBLIC_DIR = path.join(ROOT, "public");
const AIRTABLE_DB_FILE = path.join(ROOT, "data", "airtable.json");
const SQLITE_DB_FILE = path.join(ROOT, "data", "petcare.db");

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
  sqlite = new DatabaseSync(SQLITE_DB_FILE);
  sqlite.exec(
    `
    CREATE TABLE IF NOT EXISTS airtable_records (
      id TEXT PRIMARY KEY,
      created_time TEXT NOT NULL,
      fields_json TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_airtable_created_time ON airtable_records(created_time DESC);
    `,
  );
  migrateLegacyJsonToSqliteIfNeeded();
}

async function listAllRecords() {
  const rows = sqlite.prepare("SELECT id, created_time, fields_json FROM airtable_records ORDER BY created_time DESC").all();
  return rows.map(rowToRecord);
}

async function getRecordById(id) {
  const row = sqlite.prepare("SELECT id, created_time, fields_json FROM airtable_records WHERE id = ?").get(id);
  return row ? rowToRecord(row) : null;
}

async function createRecords(records) {
  const normalized = records.map((record) => normalizeRecord(record));
  const insert = sqlite.prepare(
    "INSERT OR REPLACE INTO airtable_records (id, created_time, fields_json) VALUES (?, ?, ?)",
  );
  for (const item of normalized) {
    insert.run(item.id, item.createdTime, JSON.stringify(item.fields || {}));
  }
  return normalized;
}

async function patchRecord(id, fields) {
  const current = await getRecordById(id);
  if (!current) return null;
  const next = {
    ...current,
    fields: { ...(current.fields || {}), ...(fields || {}) },
  };
  sqlite
    .prepare("UPDATE airtable_records SET fields_json = ? WHERE id = ?")
    .run(JSON.stringify(next.fields || {}), id);
  return next;
}

async function deleteRecord(id) {
  const result = sqlite.prepare("DELETE FROM airtable_records WHERE id = ?").run(id);
  return (result.changes || 0) > 0;
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
    const deleted = await deleteRecord(id);
    if (!deleted) {
      sendJson(res, 404, { error: { type: "NOT_FOUND", message: "Record not found" } });
      return true;
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

    if (url.pathname.startsWith("/api/airtable")) {
      const handled = await handleAirtableApi(req, res, url);
      if (handled) return;
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
  console.log(`Persistence backend: SQLite (${SQLITE_DB_FILE})`);
  console.log("Airtable writes are redirected to /api/airtable");
});
