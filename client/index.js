const server = "http://localhost:3000"

$(document).ready(function () {
   const token = localStorage.getItem("token")
   // getBackroundImage()
	if (token) {
		$("#login").hide()
      $("#register").hide()
      $("#home").show()
      getAllPlants()
		// read()
	} else {
		$("#register").hide()
		$("#login").show()
   }
   
   $("#btn-get-another-random").on("click", function () {
      getAnotherPlants()
   })
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
      $(location).attr('href', 'localhost:8080/plant.html')
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

getBackroundImage = () => {
   $.ajax({
      type: "GET",
      url: server + "/photos",
   })
   .done(photo => {
      console.log(photo);
      // $("#register").append(`
      //    <div class="bg"></div>
      // `)
      // $("#background-img").append(`
      // <img src="${photo}"
              
      //          <div class="bg-caption pull-bottom sm-pull-bottom text-white p-l-20 m-b-20">
      //          <h2 class="semi-bold text-white">
      //             Instaplants makes it more easy to enjoy what matter the most in life</h2>
      //          </div>
      // `)
      
   })
   .fail(err => {
      console.log(err);
   })
}

getAllPlants = () => {
   // $("#home").show()
   $.ajax({
      type: "GET",
      url: server + "/plants",
   }).done(plants => {
      console.log(plants.data);
      plants.data.forEach(plant => {
         if (!plant.common_name) {
            plant.common_name = "No common name as of yet"
         }

         if (!plant.scientific_name) {
            plant.scientific_name = "No scientific name as of yet"
         }

         if (!plant.genus) {
            plant.genus = "'Not belong to any genus'"
         }

         if (!plant.family) {
            plant.family = "'Not belong to any family'"
         }

         if (!plant.year) {
            plant.year = "'Date Discovered unknown'"
         }

         if (!plant.bibliography) {
            plant.bibliography = "Not show up in any bibliography"
         }

         if (!plant.author) {
            plant.author = "No author wrote bibliography about this plant"
         }

         if(plant.synonyms.length === 0) {
            plant.synonyms.push('No publicly known synonyms')
         }

         if (!plant.image_url) {
            let name = plant.slug
            $("#plant-list").append(`
            <div class="card">
            
            <div class="card-body">
               <h5 id="plant-list-name" class="card-title">Common Name: ${plant.common_name}</h5>
               <p id="plant-list-scientific" class="card-text"><small class="text-muted">${plant.scientific_name}</small></p>
               
               <p class="card-text">
                  This plant belong to: ${plant.genus} and ${plant.family}, and accepted as valid plant species in "${plant.year}". 
                  First mentioned in "${plant.bibliography}" by ${plant.author}. 
                  Another synomys for this plant name is "${plant.synonyms[0]}."
               </p>
               </div>
            </div>
         `  );
         }
         else {
            let name = plant.slug
            $("#plant-list").append(`
            <form>
            <div class="card">
            
            <div class="card-body">
               <h5 id="plant-list-name" class="card-title">Common Name: ${plant.common_name}</h5>
               <p id="plant-list-scientific" class="card-text"><small class="text-muted">${plant.scientific_name}</small></p>
               <a target="_blank" href="${plant.image_url}">
                  <img id="plant-list-img" src="${plant.image_url}" alt="Card image cap">
               </a>
               
               <p class="card-text">
                  This plant belong to Genus${plant.genus} and Family ${plant.family}, and accepted as valid plant species in "${plant.year}". 
                  First mentioned in "${plant.bibliography}" by ${plant.author}.
                  Another synomys for this plant name is "${plant.synonyms[0]}."
               </p>
               </div>
            </div>
            </form>
            
         `);
         }
      })
   })
   .fail(err => {
      console.log(err);
   })
}