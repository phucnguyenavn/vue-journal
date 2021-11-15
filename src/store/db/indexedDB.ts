import { openDB } from "idb";

const DB_NAME = "utility-db";
const DB_VERSION = 1;


export async function getDB() {
  await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      db.createObjectStore("journal",{keyPath : "date"});   
    },
  });
}
export async function addDB(title:String, content:String, emoji:String, date:Date, mood:Number) {
  const db = await openDB(DB_NAME, DB_VERSION);
  db.put("journal", {
    user_id: localStorage.getItem("user-id"),
    title: title,
    content: content,
    emoji: emoji,
    date: date,
    mood: mood,
  });
}
