const server = "http://localhost:3000"

$(document).ready(function (){
    const token = localStorage.getItem("token")
    if(token){
        $("#login").hide()
        $("#register").hide()
        read()
    } else {
        $("#register").show()
        $("#login").show()
    }
})

//Register
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

// Login
function login(event){
    event.preventDefault()
    const email = $("#login-email").val()
    const password = $("#login-password").val()

    $.ajax({
        method: "POST",
        url: server + "/users/login",
        data: { email, password }
    }).done(response => {
        const token = response.token
        localStorage.setItem("token", token)
        $("#login").hide()
        $("#home").show()
    }).fail(err => {
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
  
}

// Google Sign Out
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}