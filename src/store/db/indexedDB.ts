import { openDB } from "idb";

const DB_NAME = "journal-db";
const DB_VERSION = 1;

interface Journal {
  title: String;
  content: String;
  emoji: String;
  created: Date;
  mood: Number;
}

export async function getDB() {
  await openDB(DB_NAME, DB_VERSION, {
    upgrade(db, oldVersion) {
      if (oldVersion < 1) {
        db.createObjectStore("journal", { keyPath: "created" });
      }
    },
    blocked() {
      console.log("blocked");
    },
    blocking() {
      console.log("blocking");
    },
    terminated() {
      console.log("terminated");
    },
  });
}

export async function addJournal(journal: Journal) {
  const db = await openDB(DB_NAME, DB_VERSION);
  await db.put("journal", journal);
}

export async function getJournal(key: Date) {
  if (key) {
    const db = await openDB(DB_NAME, DB_VERSION);
    return await db.get("journal", key);
  }
}

export async function getJournals() {
  const db = await openDB(DB_NAME, DB_VERSION);
  return await db.getAll("journal");
}
