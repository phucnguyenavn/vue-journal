

const DB_NAME = "utility_db";
const DB_VERSION = 1;
let db;

export default {
   getDb() {
    let openRequest =  indexedDB.open(DB_NAME, DB_VERSION);
    openRequest.onupgradeneeded = () => {
      db =  openRequest.result;
      let store = db.createObjectStore("journal", {
        autoIncrement: true,
        keyPath: "id",
      });
      store.createIndex("");
      console.log(db);
    };
    openRequest.onerror = () => {
      console.error("Error", openRequest.error);
    };
    openRequest.onsuccess = () => {
      db = openRequest.result;
    };
  },

};
