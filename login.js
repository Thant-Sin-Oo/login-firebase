import fire from "/firebase.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
import {set, ref, update } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

const { app, database, auth } = fire;
const login = document.getElementById('login');


  login.addEventListener('click', (e)=>{

    var email = document.getElementById('email').value;
    var password = document.getElementById('password-field').value;
    
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        const dt = new Date();
        update (ref(database,'users/' + user.uid),{
          last_login:dt,
        })
        alert('User loged in')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            alert(errorMessage);
        });
  })

  // const user = auth.currentUser;
  // onAutStateCanged(auth,(user) =>{
  //   if(user){
  //     const uid = user.uid;
  //   }
  //   else{
  //     //user is sign out
  //   }
  // })

  // logout.addEventListener('click',(e)=>{

  //   signOut(auth).then(() => {
  //     // Sign-out successful.
  //     alert('user loged out');
  //   }).catch((error) => {
  //     // An error happened.
  //     const errorCode = error.code;
  //           const errorMessage = error.message;
            
  //           alert(errorMessage);
  //   });
  // })

