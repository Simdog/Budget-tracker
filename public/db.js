let db;
const request = window.indexedDB.open("budget", 1);



request.onupgradeneeded = function (event) {
  const db = event.target.result;
  let objectStore = db.createObjectStore("pending", { autoIncrement: true });
};
