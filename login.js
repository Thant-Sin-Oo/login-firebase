import {app, database, auth} from "/firebase.js";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
  import {set, ref } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

  const login = document.getElementById('login-btn');
  const signup = document.getElementById('signup');
  

  // signup.addEventListener('click'), (e)=>{

  //   var email = document.getElementById('email').value;
  //   var password = document.getElementById('password-field').value;
  //   var username = document.getElementById('username').value;

  //   createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {

  //   const user = userCredential.user;
  //   const userId = user.uid;

  //   createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });
    
  //   alert('user created!');
    
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;

  //   alert(errorMessage);
  //   // ..
  // });
  // }

  signup.addEventListener('click', (e)=>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password-field').value;
    var username = document.getElementById('username').value;
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        set(ref(database, 'users/' + user.uid), {
          username: username,
          email: email
        });

        alert('user created');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
      });
  })

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

