const { response } = require("express")

const server = "http://localhost:3000"

function register(event) {
	event.preventDefault()
	const username = $("#register-username").val()
	const email = $("#register-email").val()
	const password = $("#register-password").val()

	$.ajax({
		method: "POST",
		url: server + "/register",
		data: { 
			username, 
			email, 
			password 
		}
	})
	.done(response => {
		console.log(response)
	})
	.fail(err => {
		console.log(err)
	})
}

// Google Sign In 
function onSignIn(googleUser) {
  // var profile = googleUser.getBasicProfile();
  // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  // console.log('Name: ' + profile.getName());
  // console.log('Image URL: ' + profile.getImageUrl());
  // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  var google_access_token = googleUser.getAuthResponse().id_token;

  // Verify di backend minta tolong sama google
  $.ajax({
		method: 'POST',
		url: 'http://localhost:3000/googleLogin',
		data: {
			google_access_token
		}
	})
	.done(response => {
		console.log(response);
	})
	.fail(err => {
		console.log(err);
	})
}

// Google Sign Out
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}
