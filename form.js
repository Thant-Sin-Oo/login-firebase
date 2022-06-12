import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

const firebaseConfig = {

    apiKey: "AIzaSyAXjf_fl_zC29CVx9ZAKncGZw1JRo2g8Pc",
    authDomain: "login44554-93356.firebaseapp.com",
    databaseURL: "https://login44554-93356-default-rtdb.firebaseio.com",
    projectId: "login44554-93356",
    storageBucket: "login44554-93356.appspot.com",
    messagingSenderId: "790453619627",
    appId: "1:790453619627:web:7e1480e83f902c994c20ee",
    measurementId: "G-9ZS6PBHC1P"
  };

////connect with firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  const database = getDatabase(app);

  document.getElementById("reg-btn").addEventListener('click', function(){
    document.getElementById("register-div").style.display="inline";
    document.getElementById("login-div").style.display="none";
  });
  
  document.getElementById("log-btn").addEventListener('click', function(){
    document.getElementById("register-div").style.display="none";
    document.getElementById("login-div").style.display="inline";
  });


  document.getElementById("login-btn").addEventListener('click', function(){
    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      const user = userCredential.user;
    
      document.getElementById("result-box").style.display="inline";
      document.getElementById("login-div").style.display="none";
      document.getElementById("result").innerHTML="Welcome Back<br>" + loginEmail + " was Login Successfully";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("result-box").style.display="inline";
      document.getElementById("login-div").style.display="none";
      document.getElementById("result").innerHTML="Sorry ! <br>" + errorMessage;
    });    
  });

  document.getElementById("register-btn").addEventListener('click', function(){
    const registerEmail = document.getElementById("register-email").value;
    const registerPassword = document.getElementById("register-password").value;
    const cregisterPassword = document.getElementById("cregister-password").value;

    if (cregisterPassword == registerPassword){

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      const user = userCredential.user;

      document.getElementById("result-box").style.display="inline";
      document.getElementById("register-div").style.display="none";
      document.getElementById("result").innerHTML="Welcome <br>" + registerEmail + " was Registered Successfully";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("result-box").style.display="inline";
      document.getElementById("register-div").style.display="none";
      document.getElementById("result").innerHTML="Sorry ! <br>" + errorMessage;
    });
  }
  else{
    alert("password difference");
  }
  });

  document.getElementById("log-out-btn").addEventListener('click', function(){
    signOut(auth).then(() => {
      document.getElementById("result-box").style.display="none";
      document.getElementById("login-div").style.display="inline";
    }).catch((error) => {
      document.getElementById("result").innerHTML="Sorry ! <br>" + errorMessage;
    });
  });

//////////////////////////////// password checker ////////////////

   function _id(name){
        return document.getElementById(name);
    }
    function _class(name){
        return document.querySelector(`.${name}`);
    }
    
    _id("register-password").addEventListener("focus", function(){
        _class("password-policies").classList.add("active");
    });
    
    _id("register-password").addEventListener("blur", function(){
        _class("password-policies").classList.remove("active");
    });
    
    _id("register-password").addEventListener("keyup",function(){
        let password = _id("register-password").value;
        if (/[A-Z]/.test(password)) {
            _class("policy-uppercase").classList.add("active");
            
        }else{
            _class("policy-uppercase") .classList.remove("active");
        }
    
        if (/[0-9]/.test(password)) {
            _class("policy-number") .classList.add("active");
        }else{
            _class("policy-number") .classList.remove("active");
        }
    
        if (/[!,@,#,$,%,^,&,*,~,?,(,)]/.test(password)) {
            _class("policy-special") .classList.add("active");
        }else{
            _class("policy-special") .classList.remove("active");
        }
    
        if (password.length >= 8) {
            _class("policy-length") .classList.add("active");
        }else{
            _class("policy-length") .classList.remove("active");
        }    
    });

    /////////////-----------------------------------password strength checker-----------------------------///////////

    const indicator = document.querySelector(".indicator");
    const input = document.querySelector("input");
    const weak = document.querySelector(".weak");
    const medium = document.querySelector(".medium");
    const strong = document.querySelector(".strong");
    const text = document.querySelector(".text");
    let regExpWeak = /[a-z]/;
    let regExpMedium = /\d+/;
    let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

    document.getElementById("register-password").addEventListener("keyup", function(){
      if(input.value != ""){
        indicator.style.display = "block";
        indicator.style.display = "flex";
        if(input.value.length <= 4 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
        if(input.value.length >= 8 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
        if(input.value.length >= 8 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
        if(no==1){
          // weak.classList.add("active");
          //text.style.display = "block";
          text.textContent = "Your password is too week";
          text.classList.add("weak");
        }
        if(no==2){
          // medium.classList.add("active");
          text.textContent = "Your password is medium";
          text.classList.add("medium");
        }
        else{
          // medium.classList.remove("active");
          text.classList.remove("medium");
        }
        if(no==3){
          // weak.classList.add("active");
          // medium.classList.add("active");
          // strong.classList.add("active");
          text.textContent = "Your password is strong";
          text.classList.add("strong");
        }
        else{
          //strong.classList.remove("active");
          text.classList.remove("strong");
        }
        
      }else{
        indicator.style.display = "none";
        text.style.display = "none";
      }
    });