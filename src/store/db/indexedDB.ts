import { openDB } from "idb";

const DB_NAME = "utility-db";
const DB_VERSION = 1;
const idb = {
  journal: openDB(DB_NAME, DB_VERSION),
};

export async function getDB() {
  await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      db.createObjectStore("journal", { keyPath: "date" });
    },
  });
}

export async function addDB(
  title: String,
  content: String,
  emoji: String,
  date: Date,
  mood: Number
) {
  const db = await idb.journal;
  await db.put("journal", {
    user_id: localStorage.getItem("user-id"),
    title: title,
    content: content,
    emoji: emoji,
    date: date,
    mood: mood,
  });
}

export async function getJournal(key: Date) {
  if (key) {
    const db = await idb.journal;
    return await db.get("journal", key);
  }
}

export async function getJournals() {
  const db = await idb.journal;
  return await db.getAll("journal");
}

export async function mockData() {
  const db = await idb.journal;
  let j = 1;
  for (let i = 0; i < 30; i++) {
    let d = new Date();
    d.setDate(j++);
    let date = d.toLocaleDateString();
    await db.put("journal", {
      user_id: localStorage.getItem("user-id"),
      title: "abc " + i,
      content: "def" + i,
      emoji: "😗",
      date: date,
      mood: 1,
    });
  }
}
