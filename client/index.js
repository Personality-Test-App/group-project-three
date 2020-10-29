const server = "http://localhost:3000"


function register(event){
    event.preventDefault()
    const username = $("#register-username").val()
    const email = $("#register-email").val()
    const password = $("#register-password").val()

    $.ajax({
        method: "POST",
        url: server + "/users/register",
        data: {username, email, password}
    }).done(response => {
        console.log(response)
    }).fail(err => {
        console.log(err)
    })
}

