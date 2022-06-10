import fire from "/firebase.js";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
import {set, ref } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

const { app, database, auth } = fire;
const login = document.getElementById('login');


  login.addEventListener('click', (e)=>{

    var email = document.getElementById('email').value;
    var password = document.getElementById('password-field').value;
    
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
            const user = userCredential.user;
        // ...
        set(ref(database, 'users/' + userid), {
            username: username,
            email: email
          });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            alert(errorMessage);
        });
  })

