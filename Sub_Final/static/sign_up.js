window.addEventListener("load", Initial);

function Initial() {
    document.getElementById("btn_create").disabled = true;

    document.getElementById("txt_username_signup").addEventListener("input", Enable_submit);
    document.getElementById("txt_password_signup").addEventListener("input", Enable_submit);

    document.getElementById("btn_login").addEventListener("click", LogIn);
    document.getElementById("btn_guest_login").addEventListener("click", Guest);
}

function Enable_submit() {
    var username = document.getElementById("txt_username_signup").value;
    var pass = document.getElementById("txt_password_signup").value;

    document.getElementById("btn_create").disabled = (username == "" || pass == "");
}

function LogIn() {
    window.location.href = "/";
}

function Guest() {
    alert("Welcome Guest! You are limited now.");
    window.location.href = "/main";
}
