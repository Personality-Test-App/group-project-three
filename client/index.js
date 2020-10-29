const server = "http://localhost:3000"

$(document).ready(function () {
	const token = localStorage.getItem("token")
	if (token) {
		$("#login").hide()
		$("#register").hide()
		read()
	} else {
		$("#register").hide()
		$("#login").show()
	}
})

// Direct to Register page
function toRegister() {
	$("#login").hide()
	$("#register").show()
}

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
			$("#login").show()
			$("#register").hide()
		})
		.fail(err => {
			console.log(err)
		})
}

// Direct to Login page
function toLogin() {
	$("#login").show()
	$("#register").hide()
}

// Login
function login(event) {
	event.preventDefault()
	const email = $("#login-email").val()
	const password = $("#login-password").val()

	$.ajax({
		method: "POST",
		url: server + "/login",
		data: { email, password }
	})
	.done(response => {
		const token = response.token
		localStorage.setItem("token", token)
		$("#login").hide()
		$("#home").show()
	})
	.fail(err => {
		console.log(err)
	})
}

// Logout
function logout() {
    $("#home").hide()
    $("#login").show()
    $("#register").show()
    localStorage.removeItem("token")
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
		url: server + '/googleLogin',
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