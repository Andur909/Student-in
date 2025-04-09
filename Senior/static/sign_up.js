window.addEventListener("load", Initial);

function Initial() {
    document.getElementById("btn_create").disabled = true;

    document.getElementById("txt_username_signup").addEventListener("input", Enable_submit);
    document.getElementById("txt_password_signup").addEventListener("input", Enable_submit);

    document.getElementById("btn_login").addEventListener("click", log_in);
	
	//Log In Guest
	document.getElementById("btn_guest_login").addEventListener("click", guest);
}

function Enable_submit() {
    let username = document.getElementById("txt_username_signup").value;
    let pass = document.getElementById("txt_password_signup").value;
    
    document.getElementById("btn_create").disabled = (username == "" || pass == "");
}

function log_in() {
	window.location.href = "log_in.html";
}

function guest() {
	//ADD - Python that saves the user as guest to limit it;
	alert("Welcome Guest! You are limited now");
	user_type = "Guest";
	window.location.href = "main.html";
}