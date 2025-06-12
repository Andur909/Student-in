window.addEventListener("load", Initial);

//Sets it up
function Initial() {
    document.getElementById("btn_submit_login").disabled = true;

    document.getElementById("txt_username_login").addEventListener("input", Enable_submit);
    document.getElementById("txt_password_login").addEventListener("input", Enable_submit);

    document.getElementById("btn_guest_login").addEventListener("click", Guest);
    document.getElementById("btn_New_login").addEventListener("click", SignUp);
}

//Enables submit when the requirements are met
function Enable_submit() {
    var username = document.getElementById("txt_username_login").value;
    var pass = document.getElementById("txt_password_login").value;

    document.getElementById("btn_submit_login").disabled = (username == "" || pass == "");
}

//Sign Up CLicked
function SignUp() {
    window.location.href = "/sign_up";
}

//Guest Clicked
function Guest() {
    alert("Welcome Guest! You are limited now.");
    window.location.href = "/main";
}
