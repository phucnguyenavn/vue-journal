import { openDB } from "idb";

const DB_NAME = "utility-db";
const DB_VERSION = 1;

interface Journal {
  title: String;
  content: String;
  emoji: String;
  created: Date;
  mood: Number;
}

interface ToDo {
  name : String;
  description : String;
  isHighIntensity : Boolean;
  isDone : Boolean;
  priority : String;
  subTask : []
}

export async function getDB() {
  await openDB(DB_NAME, DB_VERSION, {
    upgrade(db, oldVersion) {
      if (oldVersion < 1) {
        db.createObjectStore("journal", { keyPath: "created" });
        db.createObjectStore("todo", {autoIncrement: true});
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

export async function addDB(todo : ToDo){
  const db = await openDB(DB_NAME, DB_VERSION);
  await db.put("todo", todo);
}

/* export async function mockData() {
  const db = await openDB(DB_NAME, DB_VERSION);
  for (let i = 1; i < 30; i++) {
    let d = new Date();
    d.setDate(i);
    let date = d.toLocaleDateString();
    await db.put("journal", {
      title: "abc " + i,
      content: "<p>def " + i + "</p>",
      emoji: "😗",
      date: date,
      mood: 1,
    });
  }
} */
