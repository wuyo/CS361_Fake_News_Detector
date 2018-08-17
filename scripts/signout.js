
//Sign User out of account

var optionsLink = document.querySelector(".js-signOut");
optionsLink.addEventListener("click", function (e) {

  e.preventDefault();

  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  window.location = "/signIn.html"
}).catch(function(error) {
  // An error happened.
  alert(error)
  
	}); 
});