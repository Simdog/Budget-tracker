let db;
const request = window.indexedDB.open("budget", 1);



request.onupgradeneeded = function (event) {
  const db = event.target.result;
  let objectStore = db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = function (event) {
    db = event.target.result;
  
    if (navigator.onLine) {
      checkDatabase();
    }
  };

  request.onerror = function (event) {
    console.log("Looks like there was an error", event.target.errorCode);
  };
  
  function saveRecord(record) {
    const transaction = db.transaction(["pending"], "readwrite");
    const storeProcess = transaction.objectStore("pending");
    
    //adding a record 
    storeProcess.add(record); 
  }
  function checkDatabase() {
    const transaction = db.transaction(["pending"], "readwrite");
    const storeProcess = transaction.objectStore("pending");
    const records = storeProcess.getAll();
  
  
    records.onsuccess = function () {
      if (records.result.length > 0) {
        fetch("/api/transition/bulk", {
          method: "POST",
          body: JSON.stringify(records.result),
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(() => {
            const transaction = db.transaction(["pending"], "readwrite");
            const storeProcess = transaction.objectStore("pending");
  
            storeProcess.clear();
          });
      }
    }
  }
  
  //app listener
  window.addEventListener("online", checkDatabase);  