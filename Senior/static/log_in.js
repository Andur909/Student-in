window.addEventListener("load", Initial);

function Initial() {
    document.getElementById("btn_submit_login").disabled = true;
	//Submit Enable
    document.getElementById("txt_username_login").addEventListener("input", Enable_submit);
    document.getElementById("txt_password_login").addEventListener("input", Enable_submit);

	//Log In
	document.getElementById("btn_submit_login").addEventListener("click", log_in);
	//Log In Guestc
	document.getElementById("btn_guest_login").addEventListener("click", guest);
	//Sign up Sender
    document.getElementById("btn_New_login").addEventListener("click", sign_up);
}

function Enable_submit() {
    let username = document.getElementById("txt_username_login").value;
    let pass = document.getElementById("txt_password_login").value;
    
    document.getElementById("btn_submit_login").disabled = (username == "" || pass == "");
}

function sign_up() {
	window.location.href = "sign_up.html";
}

function log_in() {
	alert("Successfully logged in, (BETA MODE)");
	window.location.href = "main.html";
}

function guest() {
	//ADD - Python that saves the user as guest to limit it;
	alert("Welcome Guest! You are limited now");
	user_type = "Guest";
	window.location.href = "main.html";
}