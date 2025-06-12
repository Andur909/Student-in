window.addEventListener("load", Initial);

//Sets it up
function Initial() {
    document.getElementById("btn_create").disabled = true;

    document.getElementById("txt_username_signup").addEventListener("input", Enable_submit);
    document.getElementById("txt_password_signup").addEventListener("input", Enable_submit);

    document.getElementById("btn_login").addEventListener("click", LogIn);
    document.getElementById("btn_guest_login").addEventListener("click", Guest);
}

//Enables Submit (Same as the one found in log in)
function Enable_submit() {
    var username = document.getElementById("txt_username_signup").value;
    var pass = document.getElementById("txt_password_signup").value;

    document.getElementById("btn_create").disabled = (username == "" || pass == "");
}

//Sends User back to Login
function LogIn() {
    window.location.href = "/";
}

//To Enter as Guest
function Guest() {
    alert("Welcome Guest! You are limited now.");
    window.location.href = "/main";
}
