const server = "http://localhost:3000"

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