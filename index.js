    // var pass = document.getElementById("password");
	// var msg = document.getElementById("message");
	// var str = document.getElementById("strength");

	// pass.addEventListener('input', () =>{
	// 	if(pass.value.length > 0) {
	// 		msg.style.display = "block";
	// 	}
	// 	else{
	// 		msg.style.display = "none";
	// 	}
	// 	if (pass.value.length < 4) {
	// 		str.innerHTML = "weak";
	// 		msg.style.color = "red"
	// 		pass.style.borderColor = "red"

	// 	}
	// 	else if (pass.value.length >= 4 && pass.value.length <8) {
	// 		str.innerHTML = "medium";

	// 		msg.style.color = "yellow"
	// 		pass.style.borderColor = "yellow"
	// 	}
	// 	else if (pass.value.length >= 8) {
	// 		str.innerHTML = "stong";

	// 		msg.style.color = "green"
	// 		pass.style.borderColor = "green"
	// 	}
	// })   
//------------------------------------------------------------------------------------------------------//

      function _id(name){
        return document.getElementById(name);
    }
    function _class(name){
        return document.querySelector(`.${name}`);
    }
    
    _id("password-field").addEventListener("focus", function(){
        _class("password-policies").classList.add("active");
    });
    
    _id("password-field").addEventListener("blur", function(){
        _class("password-policies").classList.remove("active");
    });
    
    _id("password-field").addEventListener("keyup",function(){
        let password = _id("password-field").value;
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
    
        if (/[!,@,#,$,%,^,&,*]/.test(password)) {
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
        