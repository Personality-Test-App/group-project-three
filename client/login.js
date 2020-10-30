const server = "http://localhost:3000"

$(document).ready(() => {
   const token = localStorage.getItem("token")
   // getBackroundImage()
   // $("#background-img").load(function() {
   //    getBackroundImage()
   //  });
   //  $(window).load(function() {
   //    // $('#loading').hide();
      
   //  });
   $("#login").hide()
   $("#register").show()
   // if (token) {
   //    $("#login").hide()
   //    $("#register").hide()
   // } else {
      
   //    // $("#homepage").hide()
   //    // $("#login").show()
   // }
})

login = (event) => {
   event.preventDefault()
   // console.log("login");
   const email = $("#login-email").val()
   const password = $("#login-password").val()
   // console.log(email, password);

   $.ajax({
         type: "POST",
         url: server + "/login",
         data: {
            email,
            password
         },
      }).done(res => {
         const token = res.access_token
         localStorage.setItem('token', token)
      })
      .fail(err => {
         console.log(err);
      })
}

getBackroundImage = () => {
   $.ajax({
      type: "GET",
      url: server + "/photos",
   })
   .done(photo => {
      console.log(photo);
      $("#background-img").append(`
      <img src="${photo}"
               data-src="${photo}"
               data-src-retina="${photo}" alt=""
               style="width: auto; height: 850px;" class="lazy">
               <div class="bg-caption pull-bottom sm-pull-bottom text-white p-l-20 m-b-20">
               <h2 class="semi-bold text-white">
                  Instaplants makes it more easy to enjoy what matter the most in life</h2>
               </div>
      `)
      
   })
   .fail(err => {
      console.log(err);
   })
}
