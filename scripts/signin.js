function storageHandlerSignin(userEmailAddress,userPassword){
	
	 firebase.auth().signInWithEmailAndPassword(userEmailAddress, userPassword).then(function(){
	 	window.location = "/userProfile.html"
	 }).catch(function(error) {
   		
   		alert(error);
	});
	 
	 
}


function getUserSigninInput(){
    console.log("signin submit pressed");
    var userEmailAddress = document.getElementById('email_input_signin').value;
    var userPassword = document.getElementById('password_input_signin').value;
    console.log("password",userEmailAddress);
    console.log("finalpass",userPassword);
    storageHandlerSignin(userEmailAddress, userPassword);
    
}    




var signinButton = document.getElementById("signin_button");
 signinButton.addEventListener("click",getUserSigninInput);

