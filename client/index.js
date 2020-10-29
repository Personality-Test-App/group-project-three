function logout(){
    $("#home").hide()
    $("#login").show()
    $("#register").show()
    localStorage.removeItem("token")
}