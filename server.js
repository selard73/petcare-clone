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
const CATEGORY_PAGE_PATHS = {
  "/grooming": "grooming",
  "/training": "training",
  "/boarding": "boarding",
  "/vet-care": "vet",
  "/vet": "vet",
  "/about": "about",
  "/contact": "about",
};
const SITEMAP_FILE = path.join(PUBLIC_DIR, "sitemap.xml");
const AIRTABLE_DB_FILE = path.join(ROOT, "data", "airtable.json");
const SQLITE_DB_FILE = path.join(ROOT, "data", "petcare.db");
const STATS_FILE = path.join(ROOT, "data", "stats.json");
const USERS_FILE = path.join(ROOT, "data", "users.json");
const BUSINESS_AUDIT_FILE = path.join(ROOT, "data", "business-audit.json");
const VISIT_COUNT_KEY = "homepage_visits";
const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || "admin@pawsitively.com").toLowerCase();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const AUTH_SESSION_DAYS = Number(process.env.AUTH_SESSION_DAYS || 30);
const APP_BASE_URL = (process.env.APP_BASE_URL || "https://petcare-clone.onrender.com").replace(/\/$/, "");
const PASSWORD_RESET_HOURS = Number(process.env.PASSWORD_RESET_HOURS || 1);
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
  ".txt": "text/plain; charset=utf-8",
  ".xml": "text/xml; charset=utf-8",
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

function serveSitemap(res) {
  fs.readFile(SITEMAP_FILE, (err, data) => {
    if (err) {
      sendText(res, 500, "Server error");
      return;
    }
    res.writeHead(200, {
      "Content-Type": "text/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    });
    res.end(data);
  });
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
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE COLLATE NOCASE,
      password_hash TEXT NOT NULL,
      name TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'guest',
      is_admin INTEGER NOT NULL DEFAULT 0,
      shortlist_json TEXT NOT NULL DEFAULT '[]',
      created_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at DESC);
    CREATE TABLE IF NOT EXISTS auth_sessions (
      token TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      created_at TEXT NOT NULL,
      expires_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_auth_sessions_user_id ON auth_sessions(user_id);
    CREATE TABLE IF NOT EXISTS password_reset_tokens (
      token TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      created_at TEXT NOT NULL,
      expires_at TEXT NOT NULL,
      used_at TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_password_reset_user_id ON password_reset_tokens(user_id);
    CREATE TABLE IF NOT EXISTS business_audit_log (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      action TEXT NOT NULL,
      business_id TEXT,
      business_name TEXT,
      business_category TEXT,
      actor_user_id TEXT,
      actor_email TEXT,
      actor_name TEXT,
      actor_is_admin INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_business_audit_created_at ON business_audit_log(created_at DESC);
    CREATE TABLE IF NOT EXISTS business_claim_requests (
      id TEXT PRIMARY KEY,
      business_id TEXT NOT NULL,
      business_name TEXT,
      user_id TEXT NOT NULL,
      user_email TEXT,
      user_name TEXT,
      message TEXT,
      status TEXT NOT NULL DEFAULT 'pending',
      created_at TEXT NOT NULL,
      reviewed_at TEXT,
      reviewed_by TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_claim_requests_status ON business_claim_requests(status, created_at DESC);
    CREATE INDEX IF NOT EXISTS idx_claim_requests_business ON business_claim_requests(business_id, status);
    CREATE INDEX IF NOT EXISTS idx_claim_requests_user ON business_claim_requests(user_id, status);
    `,
  );
  const visitRow = sqlite.prepare("SELECT value FROM site_stats WHERE key = ?").get(VISIT_COUNT_KEY);
  if (!visitRow) {
    sqlite.prepare("INSERT INTO site_stats (key, value) VALUES (?, 0)").run(VISIT_COUNT_KEY);
  }
  migrateLegacyJsonToSqliteIfNeeded();
  usingSqlite = true;
}

function generateUserId() {
  return `user_${crypto.randomBytes(8).toString("hex")}`;
}

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password, storedHash) {
  if (!storedHash || !storedHash.includes(":")) return false;
  const [salt, hash] = storedHash.split(":");
  if (!salt || !hash) return false;
  const verify = crypto.scryptSync(password, salt, 64).toString("hex");
  try {
    return crypto.timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(verify, "hex"));
  } catch {
    return false;
  }
}

function normalizeEmail(email = "") {
  return String(email).trim().toLowerCase();
}

function publicUser(row) {
  if (!row) return null;
  return {
    id: row.id,
    email: row.email,
    name: row.name,
    role: row.role || "guest",
    isAdmin: !!(row.is_admin ?? row.isAdmin),
    createdAt: row.created_at || row.createdAt || null,
  };
}

function parseShortlistJson(text) {
  try {
    const parsed = JSON.parse(text || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function getBearerToken(req) {
  const auth = req.headers.authorization || "";
  const match = auth.match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : "";
}

function getSessionTokenFromRequest(req) {
  const headerToken = req.headers["x-pawsitively-session"];
  return headerToken ? String(headerToken).trim() : getBearerToken(req);
}

async function getActorFromRequest(req) {
  const token = getSessionTokenFromRequest(req);
  if (!token) return null;
  const session = await getAuthSession(token);
  if (!session) return null;
  return getUserByIdAsync(session.user_id);
}

function actorToMeta(actor) {
  if (!actor) {
    return { userId: null, email: "unknown", name: "Unknown", isAdmin: false };
  }
  return {
    userId: actor.id,
    email: actor.email,
    name: actor.name,
    isAdmin: !!(actor.is_admin ?? actor.isAdmin),
  };
}

function isBusinessRecord(fields = {}) {
  const price = String(fields.price || "");
  return price.startsWith("BUSINESS:") && price !== "BUSINESS:DELETED";
}

function parseBusinessAbout(fields = {}) {
  try {
    const parsed = JSON.parse(fields.about || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function stampBusinessFields(fields = {}, actor, { isCreate = false, existingFields = null } = {}) {
  if (!isBusinessRecord(fields)) return fields;
  const about = parseBusinessAbout(fields);
  const existingAbout = existingFields ? parseBusinessAbout(existingFields) : {};
  const actorMeta = actorToMeta(actor);
  const now = new Date().toISOString();

  if (isCreate && !about.createdByEmail && !existingAbout.createdByEmail) {
    about.createdByUserId = actorMeta.userId;
    about.createdByEmail = actorMeta.email;
    about.createdByName = actorMeta.name;
    about.createdByIsAdmin = actorMeta.isAdmin;
    about.createdAt = about.createdAt || now;
  } else if (!about.createdByEmail && existingAbout.createdByEmail) {
    about.createdByUserId = existingAbout.createdByUserId;
    about.createdByEmail = existingAbout.createdByEmail;
    about.createdByName = existingAbout.createdByName;
    about.createdByIsAdmin = existingAbout.createdByIsAdmin;
    about.createdAt = existingAbout.createdAt || about.createdAt;
  }

  about.lastUpdatedByUserId = actorMeta.userId;
  about.lastUpdatedByEmail = actorMeta.email;
  about.lastUpdatedByName = actorMeta.name;
  about.lastUpdatedByIsAdmin = actorMeta.isAdmin;
  about.updatedAt = now;

  return { ...fields, about: JSON.stringify(about) };
}

async function appendBusinessAuditLog({ action, fields, actor }) {
  if (!isBusinessRecord(fields)) return;
  const about = parseBusinessAbout(fields);
  const actorMeta = actorToMeta(actor);
  const entry = {
    action,
    businessId: fields.whyWeLoveIt || about.id || "",
    businessName: about.name || fields.name || "",
    businessCategory: String(fields.price || "").replace(/^BUSINESS:/, ""),
    actorUserId: actorMeta.userId,
    actorEmail: actorMeta.email,
    actorName: actorMeta.name,
    actorIsAdmin: actorMeta.isAdmin ? 1 : 0,
    createdAt: new Date().toISOString(),
  };

  if (usingSqlite) {
    sqlite
      .prepare(
        `INSERT INTO business_audit_log
          (action, business_id, business_name, business_category, actor_user_id, actor_email, actor_name, actor_is_admin, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        entry.action,
        entry.businessId,
        entry.businessName,
        entry.businessCategory,
        entry.actorUserId,
        entry.actorEmail,
        entry.actorName,
        entry.actorIsAdmin,
        entry.createdAt,
      );
    return;
  }

  let db = { entries: [] };
  try {
    const raw = await fsp.readFile(BUSINESS_AUDIT_FILE, "utf8");
    db = JSON.parse(raw);
  } catch {
    db = { entries: [] };
  }
  db.entries.unshift(entry);
  db.entries = db.entries.slice(0, 500);
  await fsp.mkdir(path.dirname(BUSINESS_AUDIT_FILE), { recursive: true });
  await fsp.writeFile(BUSINESS_AUDIT_FILE, `${JSON.stringify(db, null, 2)}\n`, "utf8");
}

async function listBusinessAuditLog(limit = 50) {
  const max = Math.min(Math.max(Number(limit) || 50, 1), 200);
  if (usingSqlite) {
    return sqlite
      .prepare(
        `SELECT action, business_id AS businessId, business_name AS businessName, business_category AS businessCategory,
                actor_user_id AS actorUserId, actor_email AS actorEmail, actor_name AS actorName,
                actor_is_admin AS actorIsAdmin, created_at AS createdAt
         FROM business_audit_log
         ORDER BY created_at DESC
         LIMIT ?`,
      )
      .all(max)
      .map((row) => ({
        ...row,
        actorIsAdmin: !!row.actorIsAdmin,
      }));
  }
  try {
    const raw = await fsp.readFile(BUSINESS_AUDIT_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return (parsed.entries || []).slice(0, max);
  } catch {
    return [];
  }
}

async function handleAdminBusinessAudit(req, res, url) {
  const user = await getUserFromRequest(req);
  if (!user || !isActorAdmin(user)) {
    sendJson(res, 403, { error: "Admin access required." });
    return true;
  }
  const limit = url.searchParams.get("limit") || "50";
  sendJson(res, 200, { entries: await listBusinessAuditLog(limit) });
  return true;
}

function generateClaimId() {
  return `claim_${crypto.randomBytes(8).toString("hex")}`;
}

function claimRowToObject(row) {
  if (!row) return null;
  return {
    id: row.id,
    businessId: row.business_id,
    businessName: row.business_name,
    userId: row.user_id,
    userEmail: row.user_email,
    userName: row.user_name,
    message: row.message || "",
    status: row.status,
    createdAt: row.created_at,
    reviewedAt: row.reviewed_at || null,
    reviewedBy: row.reviewed_by || null,
  };
}

function getPendingClaimForUserAndBusiness(userId, businessId) {
  if (!usingSqlite) return null;
  const row = sqlite
    .prepare(
      "SELECT * FROM business_claim_requests WHERE user_id = ? AND business_id = ? AND status = 'pending' ORDER BY created_at DESC LIMIT 1",
    )
    .get(userId, businessId);
  return claimRowToObject(row);
}

function listClaimRequests({ status = null, userId = null, businessId = null, limit = 50 } = {}) {
  if (!usingSqlite) return [];
  const clauses = [];
  const params = [];
  if (status) {
    clauses.push("status = ?");
    params.push(status);
  }
  if (userId) {
    clauses.push("user_id = ?");
    params.push(userId);
  }
  if (businessId) {
    clauses.push("business_id = ?");
    params.push(businessId);
  }
  const where = clauses.length ? `WHERE ${clauses.join(" AND ")}` : "";
  params.push(Number(limit) || 50);
  const rows = sqlite
    .prepare(
      `SELECT * FROM business_claim_requests ${where} ORDER BY created_at DESC LIMIT ?`,
    )
    .all(...params);
  return rows.map(claimRowToObject);
}

async function assignBusinessOwner(businessId, user) {
  const record = await findBusinessRecordByBusinessId(businessId);
  if (!record) {
    throw new Error("Business listing not found.");
  }
  const about = parseBusinessAbout(record.fields);
  if (about.ownerId && about.ownerId !== user.id) {
    throw new Error("This listing already has an owner.");
  }
  about.ownerId = user.id;
  about.ownerEmail = user.email;
  about.ownerName = user.name;
  about.linkedAt = new Date().toISOString();
  const nextFields = { ...record.fields, about: JSON.stringify(about) };
  await patchRecord(record.id, nextFields);
  return nextFields;
}

async function handleCreateBusinessClaim(req, res) {
  if (!usingSqlite) {
    sendJson(res, 503, { error: "Claim requests are not available on this server." });
    return true;
  }
  const user = await getUserFromRequest(req);
  if (!user) {
    sendJson(res, 401, { error: "Please log in to request a business link." });
    return true;
  }
  if (user.role !== "business" && !isActorAdmin(user)) {
    sendJson(res, 403, { error: "Only business accounts can request to link a listing." });
    return true;
  }
  const body = await parseBody(req);
  const businessId = String(body.businessId || "").trim();
  const message = String(body.message || "").trim();
  if (!businessId) {
    sendJson(res, 400, { error: "Business ID is required." });
    return true;
  }
  const record = await findBusinessRecordByBusinessId(businessId);
  if (!record) {
    sendJson(res, 404, { error: "Business listing not found." });
    return true;
  }
  const about = parseBusinessAbout(record.fields);
  if (about.ownerId) {
    sendJson(res, 409, { error: "This listing already has a linked owner." });
    return true;
  }
  const existingPending = getPendingClaimForUserAndBusiness(user.id, businessId);
  if (existingPending) {
    sendJson(res, 200, { ok: true, request: existingPending, message: "You already have a pending request for this listing." });
    return true;
  }
  const now = new Date().toISOString();
  const claim = {
    id: generateClaimId(),
    business_id: businessId,
    business_name: about.name || record.fields.name || "",
    user_id: user.id,
    user_email: user.email,
    user_name: user.name,
    message,
    status: "pending",
    created_at: now,
    reviewed_at: null,
    reviewed_by: null,
  };
  sqlite
    .prepare(
      "INSERT INTO business_claim_requests (id, business_id, business_name, user_id, user_email, user_name, message, status, created_at, reviewed_at, reviewed_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    )
    .run(
      claim.id,
      claim.business_id,
      claim.business_name,
      claim.user_id,
      claim.user_email,
      claim.user_name,
      claim.message,
      claim.status,
      claim.created_at,
      claim.reviewed_at,
      claim.reviewed_by,
    );
  sendJson(res, 201, { ok: true, request: claimRowToObject(claim) });
  return true;
}

async function handleMyBusinessClaim(req, res, url) {
  const user = await getUserFromRequest(req);
  if (!user) {
    sendJson(res, 401, { error: "Not authenticated." });
    return true;
  }
  const businessId = url.searchParams.get("businessId");
  if (businessId) {
    const pending = getPendingClaimForUserAndBusiness(user.id, businessId);
    const approved = sqlite
      ?.prepare(
        "SELECT * FROM business_claim_requests WHERE user_id = ? AND business_id = ? AND status = 'approved' ORDER BY reviewed_at DESC LIMIT 1",
      )
      .get(user.id, businessId);
    sendJson(res, 200, {
      request: pending || claimRowToObject(approved) || null,
    });
    return true;
  }
  sendJson(res, 200, { requests: listClaimRequests({ userId: user.id, limit: 20 }) });
  return true;
}

async function handleAdminListClaims(req, res, url) {
  const user = await getUserFromRequest(req);
  if (!user || !isActorAdmin(user)) {
    sendJson(res, 403, { error: "Admin access required." });
    return true;
  }
  const status = url.searchParams.get("status") || "pending";
  sendJson(res, 200, { requests: listClaimRequests({ status, limit: 100 }) });
  return true;
}

async function handleAdminReviewClaim(req, res, claimId) {
  if (!usingSqlite) {
    sendJson(res, 503, { error: "Claim requests are not available on this server." });
    return true;
  }
  const admin = await getUserFromRequest(req);
  if (!admin || !isActorAdmin(admin)) {
    sendJson(res, 403, { error: "Admin access required." });
    return true;
  }
  const body = await parseBody(req);
  const action = String(body.action || "").trim().toLowerCase();
  if (!["approve", "deny"].includes(action)) {
    sendJson(res, 400, { error: "Action must be approve or deny." });
    return true;
  }
  const row = sqlite.prepare("SELECT * FROM business_claim_requests WHERE id = ?").get(claimId);
  const claim = claimRowToObject(row);
  if (!claim) {
    sendJson(res, 404, { error: "Claim request not found." });
    return true;
  }
  if (claim.status !== "pending") {
    sendJson(res, 409, { error: "This request has already been reviewed." });
    return true;
  }
  const now = new Date().toISOString();
  if (action === "deny") {
    sqlite
      .prepare("UPDATE business_claim_requests SET status = 'denied', reviewed_at = ?, reviewed_by = ? WHERE id = ?")
      .run(now, admin.id, claimId);
    sendJson(res, 200, { ok: true, request: { ...claim, status: "denied", reviewedAt: now, reviewedBy: admin.id } });
    return true;
  }
  const claimant = await getUserByIdAsync(claim.userId);
  if (!claimant) {
    sendJson(res, 404, { error: "Claimant account not found." });
    return true;
  }
  await assignBusinessOwner(claim.businessId, claimant);
  sqlite
    .prepare("UPDATE business_claim_requests SET status = 'approved', reviewed_at = ?, reviewed_by = ? WHERE id = ?")
    .run(now, admin.id, claimId);
  sqlite
    .prepare(
      "UPDATE business_claim_requests SET status = 'denied', reviewed_at = ?, reviewed_by = ? WHERE business_id = ? AND status = 'pending' AND id != ?",
    )
    .run(now, admin.id, claim.businessId, claimId);
  sendJson(res, 200, {
    ok: true,
    request: { ...claim, status: "approved", reviewedAt: now, reviewedBy: admin.id },
    ownerId: claimant.id,
  });
  return true;
}

async function handleClaimsApi(req, res, url) {
  const method = req.method.toUpperCase();
  const route = url.pathname.replace(/\/$/, "");
  if (route === "/api/claims" && method === "POST") {
    return handleCreateBusinessClaim(req, res);
  }
  if (route === "/api/claims/mine" && method === "GET") {
    return handleMyBusinessClaim(req, res, url);
  }
  if (route === "/api/admin/claims" && method === "GET") {
    return handleAdminListClaims(req, res, url);
  }
  const claimMatch = route.match(/^\/api\/admin\/claims\/([^/]+)$/);
  if (claimMatch && method === "PATCH") {
    return handleAdminReviewClaim(req, res, claimMatch[1]);
  }
  return false;
}

function getSessionExpiryIso() {
  const expires = new Date();
  expires.setDate(expires.getDate() + AUTH_SESSION_DAYS);
  return expires.toISOString();
}

async function readUsersDb() {
  try {
    const raw = await fsp.readFile(USERS_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return {
      users: Array.isArray(parsed.users) ? parsed.users : [],
      sessions: Array.isArray(parsed.sessions) ? parsed.sessions : [],
      passwordResets: Array.isArray(parsed.passwordResets) ? parsed.passwordResets : [],
    };
  } catch {
    return { users: [], sessions: [], passwordResets: [] };
  }
}

async function writeUsersDb(data) {
  const tempFile = `${USERS_FILE}.tmp`;
  const content = `${JSON.stringify(data, null, 2)}\n`;
  writeQueue = writeQueue.then(async () => {
    await fsp.mkdir(path.dirname(USERS_FILE), { recursive: true });
    await fsp.writeFile(tempFile, content, "utf8");
    await fsp.rename(tempFile, USERS_FILE);
  });
  return writeQueue;
}

function sqliteRowToUser(row) {
  return row
    ? {
        id: row.id,
        email: row.email,
        password_hash: row.password_hash,
        name: row.name,
        role: row.role,
        is_admin: row.is_admin,
        shortlist_json: row.shortlist_json,
        created_at: row.created_at,
      }
    : null;
}

function getUserByEmail(email) {
  const normalized = normalizeEmail(email);
  if (usingSqlite) {
    const row = sqlite
      .prepare("SELECT * FROM users WHERE lower(email) = lower(?)")
      .get(normalized);
    return sqliteRowToUser(row);
  }
  return null;
}

async function getUserByEmailAsync(email) {
  if (usingSqlite) return getUserByEmail(email);
  const db = await readUsersDb();
  const normalized = normalizeEmail(email);
  return db.users.find((user) => normalizeEmail(user.email) === normalized) || null;
}

function getUserById(userId) {
  if (usingSqlite) {
    const row = sqlite.prepare("SELECT * FROM users WHERE id = ?").get(userId);
    return sqliteRowToUser(row);
  }
  return null;
}

async function getUserByIdAsync(userId) {
  if (usingSqlite) return getUserById(userId);
  const db = await readUsersDb();
  return db.users.find((user) => user.id === userId) || null;
}

async function createUserRecord({ email, password, name, role = "guest", isAdmin = false }) {
  const normalizedEmail = normalizeEmail(email);
  const now = new Date().toISOString();
  const user = {
    id: generateUserId(),
    email: normalizedEmail,
    password_hash: hashPassword(password),
    name: String(name || "").trim() || normalizedEmail.split("@")[0],
    role: role === "business" ? "business" : "guest",
    is_admin: isAdmin ? 1 : 0,
    shortlist_json: "[]",
    created_at: now,
  };

  if (usingSqlite) {
    sqlite
      .prepare(
        "INSERT INTO users (id, email, password_hash, name, role, is_admin, shortlist_json, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      )
      .run(
        user.id,
        user.email,
        user.password_hash,
        user.name,
        user.role,
        user.is_admin,
        user.shortlist_json,
        user.created_at,
      );
    return user;
  }

  const db = await readUsersDb();
  db.users.push(user);
  await writeUsersDb(db);
  return user;
}

async function createAuthSession(userId) {
  const token = crypto.randomBytes(32).toString("hex");
  const createdAt = new Date().toISOString();
  const expiresAt = getSessionExpiryIso();

  if (usingSqlite) {
    sqlite
      .prepare(
        "INSERT INTO auth_sessions (token, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)",
      )
      .run(token, userId, createdAt, expiresAt);
    return { token, expiresAt };
  }

  const db = await readUsersDb();
  db.sessions.push({ token, user_id: userId, created_at: createdAt, expires_at: expiresAt });
  await writeUsersDb(db);
  return { token, expiresAt };
}

async function deleteAuthSession(token) {
  if (!token) return;
  if (usingSqlite) {
    sqlite.prepare("DELETE FROM auth_sessions WHERE token = ?").run(token);
    return;
  }
  const db = await readUsersDb();
  db.sessions = db.sessions.filter((session) => session.token !== token);
  await writeUsersDb(db);
}

async function getAuthSession(token) {
  if (!token) return null;
  const now = new Date().toISOString();

  if (usingSqlite) {
    const row = sqlite
      .prepare("SELECT token, user_id, created_at, expires_at FROM auth_sessions WHERE token = ?")
      .get(token);
    if (!row || row.expires_at <= now) {
      if (row) sqlite.prepare("DELETE FROM auth_sessions WHERE token = ?").run(token);
      return null;
    }
    return row;
  }

  const db = await readUsersDb();
  const session = db.sessions.find((item) => item.token === token);
  if (!session || session.expires_at <= now) {
    if (session) {
      db.sessions = db.sessions.filter((item) => item.token !== token);
      await writeUsersDb(db);
    }
    return null;
  }
  return session;
}

async function getUserFromRequest(req) {
  const token = getSessionTokenFromRequest(req);
  if (!token) return null;
  const session = await getAuthSession(token);
  if (!session) return null;
  return getUserByIdAsync(session.user_id);
}

async function updateUserShortlist(userId, shortlist) {
  const payload = JSON.stringify(Array.isArray(shortlist) ? shortlist : []);
  if (usingSqlite) {
    sqlite.prepare("UPDATE users SET shortlist_json = ? WHERE id = ?").run(payload, userId);
    return;
  }
  const db = await readUsersDb();
  const idx = db.users.findIndex((user) => user.id === userId);
  if (idx >= 0) {
    db.users[idx].shortlist_json = payload;
    await writeUsersDb(db);
  }
}

function getUserAccountStats() {
  if (usingSqlite) {
    const totalRow = sqlite
      .prepare("SELECT COUNT(*) AS count FROM users WHERE is_admin = 0")
      .get();
    const guestRow = sqlite
      .prepare("SELECT COUNT(*) AS count FROM users WHERE is_admin = 0 AND role = 'guest'")
      .get();
    const businessRow = sqlite
      .prepare("SELECT COUNT(*) AS count FROM users WHERE is_admin = 0 AND role = 'business'")
      .get();
    return {
      totalAccounts: totalRow?.count || 0,
      guestAccounts: guestRow?.count || 0,
      businessAccounts: businessRow?.count || 0,
    };
  }
  return null;
}

async function getUserAccountStatsAsync() {
  const sqliteStats = getUserAccountStats();
  const accounts = await listRegisteredAccountsAsync();
  if (sqliteStats) {
    return { ...sqliteStats, accounts };
  }
  const db = await readUsersDb();
  const filtered = db.users.filter((user) => !user.is_admin);
  return {
    totalAccounts: filtered.length,
    guestAccounts: filtered.filter((user) => user.role === "guest").length,
    businessAccounts: filtered.filter((user) => user.role === "business").length,
    accounts,
  };
}

async function listRegisteredAccountsAsync() {
  if (usingSqlite) {
    const rows = sqlite
      .prepare(
        "SELECT id, email, name, role, created_at FROM users WHERE is_admin = 0 ORDER BY created_at DESC",
      )
      .all();
    return rows.map((row) => ({
      id: row.id,
      email: row.email,
      name: row.name,
      role: row.role,
      createdAt: row.created_at,
    }));
  }
  const db = await readUsersDb();
  return db.users
    .filter((user) => !user.is_admin)
    .map((user) => ({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: user.created_at,
    }))
    .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
}

async function ensureDefaultAdminUser() {
  const existing = await getUserByEmailAsync(ADMIN_EMAIL);
  if (existing) return;

  try {
    await createUserRecord({
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      name: "Admin",
      role: "business",
      isAdmin: true,
    });
    console.log(`Default admin account ready: ${ADMIN_EMAIL}`);
  } catch (error) {
    const message = String(error?.message || "");
    if (message.includes("UNIQUE") || error?.code === "ERR_SQLITE_ERROR") {
      return;
    }
    throw error;
  }
}

async function buildAuthResponse(user) {
  const session = await createAuthSession(user.id);
  return {
    user: publicUser(user),
    accessToken: session.token,
    refreshToken: session.token,
    shortlist: parseShortlistJson(user.shortlist_json),
    expiresAt: session.expiresAt,
  };
}

function validateAccountPassword(password = "") {
  const value = String(password);
  if (value.length < 8) {
    return "Password must be at least 8 characters.";
  }
  if (!/[A-Za-z]/.test(value)) {
    return "Password must include at least one letter.";
  }
  if (!/[0-9]/.test(value)) {
    return "Password must include at least one number.";
  }
  return null;
}

async function handleAuthSignup(req, res) {
  const body = await parseBody(req);
  const email = normalizeEmail(body.email);
  const password = String(body.password || "");
  const name = String(body.name || "").trim();
  const role = body.role === "business" ? "business" : "guest";

  if (!email || !email.includes("@")) {
    sendJson(res, 400, { error: "A valid email address is required." });
    return true;
  }
  const passwordError = validateAccountPassword(password);
  if (passwordError) {
    sendJson(res, 400, { error: passwordError });
    return true;
  }
  if (!name) {
    sendJson(res, 400, { error: "Name is required." });
    return true;
  }
  if (email === ADMIN_EMAIL) {
    sendJson(res, 400, { error: "This email is reserved." });
    return true;
  }

  const existing = await getUserByEmailAsync(email);
  if (existing) {
    sendJson(res, 409, { error: "An account with this email already exists. Try logging in or use Forgot password." });
    return true;
  }

  try {
    const user = await createUserRecord({ email, password, name, role, isAdmin: false });
    const payload = await buildAuthResponse(user);
    sendJson(res, 201, payload);
  } catch (error) {
    const message = String(error?.message || "");
    if (message.includes("UNIQUE") || error?.code === "ERR_SQLITE_ERROR") {
      sendJson(res, 409, { error: "An account with this email already exists. Try logging in or use Forgot password." });
      return true;
    }
    throw error;
  }
  return true;
}

async function updateUserPassword(userId, password) {
  const passwordHash = hashPassword(password);
  if (usingSqlite) {
    sqlite.prepare("UPDATE users SET password_hash = ? WHERE id = ?").run(passwordHash, userId);
    return;
  }
  const db = await readUsersDb();
  const idx = db.users.findIndex((user) => user.id === userId);
  if (idx >= 0) {
    db.users[idx].password_hash = passwordHash;
    await writeUsersDb(db);
  }
}

async function invalidateUserSessions(userId) {
  if (usingSqlite) {
    sqlite.prepare("DELETE FROM auth_sessions WHERE user_id = ?").run(userId);
    return;
  }
  const db = await readUsersDb();
  db.sessions = db.sessions.filter((session) => session.user_id !== userId);
  await writeUsersDb(db);
}

async function createPasswordResetToken(userId) {
  const token = crypto.randomBytes(32).toString("hex");
  const createdAt = new Date().toISOString();
  const expiresAt = new Date(Date.now() + PASSWORD_RESET_HOURS * 60 * 60 * 1000).toISOString();

  if (usingSqlite) {
    sqlite.prepare("DELETE FROM password_reset_tokens WHERE user_id = ?").run(userId);
    sqlite
      .prepare(
        "INSERT INTO password_reset_tokens (token, user_id, created_at, expires_at, used_at) VALUES (?, ?, ?, ?, NULL)",
      )
      .run(token, userId, createdAt, expiresAt);
    return token;
  }

  const db = await readUsersDb();
  db.passwordResets = (db.passwordResets || []).filter((row) => row.user_id !== userId);
  db.passwordResets.push({
    token,
    user_id: userId,
    created_at: createdAt,
    expires_at: expiresAt,
    used_at: null,
  });
  await writeUsersDb(db);
  return token;
}

async function getPasswordResetToken(token) {
  if (!token) return null;
  const now = new Date().toISOString();

  if (usingSqlite) {
    const row = sqlite
      .prepare(
        "SELECT token, user_id, created_at, expires_at, used_at FROM password_reset_tokens WHERE token = ?",
      )
      .get(token);
    if (!row || row.used_at || row.expires_at <= now) return null;
    return row;
  }

  const db = await readUsersDb();
  const row = (db.passwordResets || []).find((item) => item.token === token);
  if (!row || row.used_at || row.expires_at <= now) return null;
  return row;
}

async function markPasswordResetTokenUsed(token) {
  const usedAt = new Date().toISOString();
  if (usingSqlite) {
    sqlite.prepare("UPDATE password_reset_tokens SET used_at = ? WHERE token = ?").run(usedAt, token);
    return;
  }
  const db = await readUsersDb();
  const row = (db.passwordResets || []).find((item) => item.token === token);
  if (row) row.used_at = usedAt;
  await writeUsersDb(db);
}

async function sendAccountEmail({ to, subject, text }) {
  if (RESEND_API_KEY) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: REVIEW_NOTIFY_FROM,
        to: [to],
        subject,
        text,
      }),
    });
    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Resend error (${response.status}): ${body}`);
    }
    return;
  }
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error("Email is not configured on the server.");
  }
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
    to,
    subject,
    text,
  });
}

async function handleAuthForgotPassword(req, res) {
  const body = await parseBody(req);
  const email = normalizeEmail(body.email);
  const genericMessage =
    "If an account exists for that email, password reset instructions have been sent.";

  if (!email || !email.includes("@")) {
    sendJson(res, 400, { error: "Please enter a valid email address." });
    return true;
  }

  const user = await getUserByEmailAsync(email);
  if (user && !user.is_admin) {
    try {
      const token = await createPasswordResetToken(user.id);
      const resetUrl = `${APP_BASE_URL}/?reset=${token}`;
      await sendAccountEmail({
        to: user.email,
        subject: "Reset your Pawsitively Fabulous password",
        text: [
          "Hello,",
          "",
          "We received a request to reset your Pawsitively Fabulous password.",
          "",
          `Reset your password using this link (valid for ${PASSWORD_RESET_HOURS} hour${PASSWORD_RESET_HOURS === 1 ? "" : "s"}):`,
          resetUrl,
          "",
          "If you did not request this, you can ignore this email.",
          "",
          "Pawsitively Fabulous",
        ].join("\n"),
      });
    } catch (error) {
      console.error("Password reset email failed:", error.message);
      sendJson(res, 500, {
        error: "Could not send reset email right now. Please try again later.",
      });
      return true;
    }
  }

  sendJson(res, 200, { ok: true, message: genericMessage });
  return true;
}

async function handleAuthResetPassword(req, res) {
  const body = await parseBody(req);
  const token = String(body.token || "").trim();
  const password = String(body.password || "");
  const passwordError = validateAccountPassword(password);
  if (passwordError) {
    sendJson(res, 400, { error: passwordError });
    return true;
  }

  const resetRow = await getPasswordResetToken(token);
  if (!resetRow) {
    sendJson(res, 400, { error: "This reset link is invalid or has expired." });
    return true;
  }

  await updateUserPassword(resetRow.user_id, password);
  await markPasswordResetTokenUsed(token);
  await invalidateUserSessions(resetRow.user_id);
  sendJson(res, 200, { ok: true, message: "Your password has been updated. You can log in now." });
  return true;
}

async function handleAuthLogin(req, res) {
  const body = await parseBody(req);
  const email = normalizeEmail(body.email);
  const password = String(body.password || "");

  const user = await getUserByEmailAsync(email);
  if (!user || !verifyPassword(password, user.password_hash)) {
    sendJson(res, 401, { error: "Invalid email or password." });
    return true;
  }

  if (normalizeEmail(user.email) === ADMIN_EMAIL && !user.is_admin) {
    if (usingSqlite) {
      sqlite.prepare("UPDATE users SET is_admin = 1 WHERE id = ?").run(user.id);
    } else {
      const db = await readUsersDb();
      const idx = db.users.findIndex((entry) => entry.id === user.id);
      if (idx >= 0) {
        db.users[idx].is_admin = 1;
        await writeUsersDb(db);
      }
    }
    user.is_admin = 1;
  }

  const payload = await buildAuthResponse(user);
  sendJson(res, 200, payload);
  return true;
}

async function handleAuthMe(req, res) {
  const user = await getUserFromRequest(req);
  if (!user) {
    sendJson(res, 401, { error: "Not authenticated." });
    return true;
  }
  sendJson(res, 200, {
    user: publicUser(user),
    shortlist: parseShortlistJson(user.shortlist_json),
  });
  return true;
}

async function handleAuthLogout(req, res) {
  const token = getSessionTokenFromRequest(req);
  await deleteAuthSession(token);
  sendJson(res, 200, { ok: true });
  return true;
}

async function handleAuthShortlist(req, res) {
  const user = await getUserFromRequest(req);
  if (!user) {
    sendJson(res, 401, { error: "Not authenticated." });
    return true;
  }
  const body = await parseBody(req);
  const shortlist = Array.isArray(body.shortlist) ? body.shortlist : [];
  await updateUserShortlist(user.id, shortlist);
  sendJson(res, 200, { ok: true, shortlist });
  return true;
}

async function handleAdminUserStats(req, res) {
  const user = await getUserFromRequest(req);
  if (!user || !isActorAdmin(user)) {
    sendJson(res, 403, { error: "Admin access required." });
    return true;
  }
  sendJson(res, 200, await getUserAccountStatsAsync());
  return true;
}

async function handleAuthApi(req, res, url) {
  const method = req.method.toUpperCase();
  const route = url.pathname.replace(/\/$/, "");

  if (route === "/api/auth/signup" && method === "POST") {
    return handleAuthSignup(req, res);
  }
  if (route === "/api/auth/login" && method === "POST") {
    return handleAuthLogin(req, res);
  }
  if (route === "/api/auth/me" && method === "GET") {
    return handleAuthMe(req, res);
  }
  if (route === "/api/auth/logout" && method === "POST") {
    return handleAuthLogout(req, res);
  }
  if (route === "/api/auth/shortlist" && method === "PATCH") {
    return handleAuthShortlist(req, res);
  }
  if (route === "/api/auth/forgot-password" && method === "POST") {
    return handleAuthForgotPassword(req, res);
  }
  if (route === "/api/auth/reset-password" && method === "POST") {
    return handleAuthResetPassword(req, res);
  }
  if (route === "/api/admin/user-stats" && method === "GET") {
    return handleAdminUserStats(req, res);
  }
  if (route === "/api/admin/business-audit" && method === "GET") {
    return handleAdminBusinessAudit(req, res, url);
  }
  return false;
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

function isActorAdmin(actor) {
  if (!actor) return false;
  if (!!(actor.is_admin ?? actor.isAdmin)) return true;
  return normalizeEmail(actor.email) === ADMIN_EMAIL;
}

async function findBusinessRecordByBusinessId(businessId) {
  if (!businessId) return null;
  const records = await listAllRecords();
  return (
    records.find(
      (record) =>
        isBusinessRecord(record.fields) && String(record.fields.whyWeLoveIt || "") === String(businessId),
    ) || null
  );
}

function canEditBusinessFields(existingFields = {}, incomingFields = {}, actor) {
  if (!actor) return false;
  if (isActorAdmin(actor)) return true;
  const existingAbout = parseBusinessAbout(existingFields);
  const incomingAbout = parseBusinessAbout(incomingFields);
  const ownerId = existingAbout.ownerId || incomingAbout.ownerId;
  const createdByUserId = existingAbout.createdByUserId || incomingAbout.createdByUserId;
  return ownerId === actor.id || createdByUserId === actor.id;
}

async function getBusinessOwnerIdForBusinessId(businessId) {
  if (!businessId) return null;
  const record = await findBusinessRecordByBusinessId(businessId);
  if (!record) return null;
  return parseBusinessAbout(record.fields).ownerId || null;
}

async function canModifyReview(existingFields = {}, actor) {
  if (!actor) return false;
  if (isActorAdmin(actor)) return true;
  const review = parseReviewFromFields(existingFields);
  if (!review?.businessId) return false;
  const ownerId = await getBusinessOwnerIdForBusinessId(review.businessId);
  return ownerId === actor.id;
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
    const items = Array.isArray(body.records) ? body.records : [body];
    const actor = await getActorFromRequest(req);
    for (const item of items) {
      const incomingFields = item.fields || {};
      if (!isBusinessRecord(incomingFields)) continue;
      const existing = await findBusinessRecordByBusinessId(incomingFields.whyWeLoveIt);
      if (existing) {
        if (!canEditBusinessFields(existing.fields, incomingFields, actor)) {
          sendJson(res, 403, { error: "You do not have permission to edit this listing." });
          return true;
        }
      } else if (!isActorAdmin(actor)) {
        sendJson(res, 403, { error: "Only admin can add new business listings." });
        return true;
      }
    }
    const prepared = items.map((item) => {
      const incomingFields = item.fields || {};
      if (!isBusinessRecord(incomingFields)) {
        return item;
      }
      const nextFields = stampBusinessFields(incomingFields, actor, { isCreate: true });
      return { ...item, fields: nextFields };
    });
    const created = await createRecords(prepared);
    for (const record of created) {
      if (isReviewRecord(record.fields)) {
        queueReviewNotification("added", record.fields);
      } else if (isBusinessRecord(record.fields)) {
        await appendBusinessAuditLog({ action: "created", fields: record.fields, actor });
      }
    }
    sendJson(res, 200, Array.isArray(body.records) ? { records: created } : created[0]);
    return true;
  }

  if (method === "PATCH" && id) {
    const body = await parseBody(req);
    const existing = await getRecordById(id);
    let fields = body.fields || {};
    const actor = await getActorFromRequest(req);
    if (isBusinessRecord(fields)) {
      if (!canEditBusinessFields(existing?.fields || {}, fields, actor)) {
        sendJson(res, 403, { error: "You do not have permission to edit this listing." });
        return true;
      }
      fields = stampBusinessFields(fields, actor, { isCreate: false, existingFields: existing?.fields });
    } else if (existing && isReviewRecord(existing.fields)) {
      if (!(await canModifyReview(existing.fields, actor))) {
        sendJson(res, 403, { error: "You do not have permission to update this review." });
        return true;
      }
    }
    const next = await patchRecord(id, fields);
    if (!next) {
      sendJson(res, 404, { error: { type: "NOT_FOUND", message: "Record not found" } });
      return true;
    }
    if (isBusinessRecord(next.fields)) {
      await appendBusinessAuditLog({ action: "updated", fields: next.fields, actor });
    }
    sendJson(res, 200, next);
    return true;
  }

  if (method === "DELETE" && id) {
    const existing = await getRecordById(id);
    const actor = await getActorFromRequest(req);
    if (!existing) {
      sendJson(res, 404, { error: { type: "NOT_FOUND", message: "Record not found" } });
      return true;
    }
    if (isBusinessRecord(existing.fields) && !canEditBusinessFields(existing.fields, {}, actor)) {
      sendJson(res, 403, { error: "You do not have permission to delete this listing." });
      return true;
    }
    const deleted = await deleteRecord(id);
    if (!deleted) {
      sendJson(res, 404, { error: { type: "NOT_FOUND", message: "Record not found" } });
      return true;
    }
    if (isReviewRecord(existing.fields)) {
      queueReviewNotification("removed", existing.fields);
    } else if (isBusinessRecord(existing.fields)) {
      await appendBusinessAuditLog({ action: "deleted", fields: existing.fields, actor });
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

    if (req.method.toUpperCase() === "GET" && url.pathname === "/sitemap.xml") {
      serveSitemap(res);
      return;
    }

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

    if (url.pathname.startsWith("/api/claims") || url.pathname.startsWith("/api/admin/claims")) {
      const handled = await handleClaimsApi(req, res, url);
      if (handled) return;
    }

    if (url.pathname.startsWith("/api/auth") || url.pathname.startsWith("/api/admin/")) {
      const handled = await handleAuthApi(req, res, url);
      if (handled) return;
    }

    if (url.pathname.startsWith("/api/airtable")) {
      const handled = await handleAirtableApi(req, res, url);
      if (handled) return;
    }

    if (url.pathname === "/api/stats/visits") {
      await handleVisitStatsApi(req, res);
      return;
    }

    if (req.method.toUpperCase() === "GET" && CATEGORY_PAGE_PATHS[url.pathname]) {
      const indexFile = path.join(PUBLIC_DIR, "index.html");
      fs.readFile(indexFile, (err, data) => {
        if (err) {
          sendText(res, 500, "Server error");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
      });
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

server.listen(PORT, async () => {
  initSqlite();
  await ensureDefaultAdminUser();
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
