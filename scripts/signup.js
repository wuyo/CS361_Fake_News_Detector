console.log("userinfo.js loaded");

function checkPassword(temppass, repeatpass){
    if(temppass == repeatpass){
        return temppass;
    }
    else{
        return 0
    }
}

function storageHandlerSignup(address, password){
    if (!theValue) {
      message('Error: No value specified');
      return;
    }
    //Save it using the Chrome extension storage API.
    chrome.storage.local.set({'user_email_address': address});
    chrome.storage.local.set({'user_password': password});



    
}

function getUserSignupInput(){
    console.log("signup submit pressed");
    var userEmailAddress = document.getElementById('email_input_signup').value;
    var userTempPassword = document.getElementById('password_input_signup').value;
    var userTempPasswordRepeat = document.getElementById('password_input_repeat_signup').value;
    console.log("emailaddress",userEmailAddress);
    console.log("temppassword",userTempPassword);
    console.log("finalpass",userTempPassword);
    var userPassword = checkPassword(userTempPassword,userTempPasswordRepeat);
     alert('Passwords Do Not Match.')
   
    firebase.auth().createUserWithEmailAndPassword(userEmailAddress, userPassword).then(function(){
        window.location = "/signIn.html"
     }).catch(function(error) {
        
        alert(error);
   

})
}

var signupButton = document.getElementById("signup_button");
 signupButton.addEventListener('click',getUserSignupInput);



