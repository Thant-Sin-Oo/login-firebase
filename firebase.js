
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
  import { getDatabase,set, ref } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAXjf_fl_zC29CVx9ZAKncGZw1JRo2g8Pc",
    authDomain: "login44554-93356.firebaseapp.com",
    databaseURL: "https://login44554-93356-default-rtdb.firebaseio.com",
    projectId: "login44554-93356",
    storageBucket: "login44554-93356.appspot.com",
    messagingSenderId: "790453619627",
    appId: "1:790453619627:web:a70c8f5a3d39a9264c20ee",
    measurementId: "G-DE4YG43J3R"
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth(app);

  export default {app, database, auth}