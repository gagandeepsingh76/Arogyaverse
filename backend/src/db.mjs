import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.resolve(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'app.db');
const db = new Database(dbPath);

db.pragma('journal_mode = WAL');

db.exec(`
CREATE TABLE IF NOT EXISTS contacts (
  id TEXT PRIMARY KEY,
  createdAt TEXT NOT NULL,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  topic TEXT,
  message TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS newsletter (
  email TEXT PRIMARY KEY,
  createdAt TEXT NOT NULL
);
`);

const insertContactStmt = db.prepare(`
  INSERT INTO contacts (id, createdAt, firstName, lastName, email, phone, topic, message)
  VALUES (@id, @createdAt, @firstName, @lastName, @email, @phone, @topic, @message)
`);

const listContactsStmt = db.prepare(`
  SELECT id, createdAt, firstName, lastName, email, phone, topic, message
  FROM contacts ORDER BY createdAt DESC LIMIT ?
`);

const insertSubscriberStmt = db.prepare(`
  INSERT OR IGNORE INTO newsletter (email, createdAt) VALUES (?, ?)
`);

const countSubscribersStmt = db.prepare(`
  SELECT COUNT(*) as count FROM newsletter
`);

export function saveContact(record) {
  insertContactStmt.run(record);
}

export function getRecentContacts(limit = 50) {
  return listContactsStmt.all(limit);
}

export function subscribeEmail(email) {
  return insertSubscriberStmt.run(email, new Date().toISOString());
}

export function getSubscriberCount() {
  const row = countSubscribersStmt.get();
  return row?.count || 0;
}

