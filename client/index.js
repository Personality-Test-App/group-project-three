const server = "http://localhost:3000"

$(document).ready(function (){
    const token = localStorage.getItem("token")
    if(token){
        $("#login").hide()
        $("#register").hide()
        read()
    }else{
        $("#register").show()
        $("#login").show()
    }
})
function register(event){
    event.preventDefault()
    const email = $("#register-email").val()
    const password = $("#register-password").val()

    $.ajax({
        method: "POST",
        url: server + "/users/register",
        data: {email, password}
    }).done(response => {
        console.log(response)
    }).fail(err => {
        console.log(err)
    })
}

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

function logout(){
    $("#home").hide()
    $("#login").show()
    $("#register").show()
    localStorage.removeItem("token")
}