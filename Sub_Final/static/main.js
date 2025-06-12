window.addEventListener("load", Initial);

function Initial() {
	true_user = true;
    document.getElementById("btn_logout").addEventListener("click", log_out);
	
	//middle buttons
	document.getElementById("btn_games").addEventListener("click", Game);
	document.getElementById("btn_calculator").addEventListener("click", Calculator);
	document.getElementById("btn_about").addEventListener("click", about);
	document.getElementById("btn_converter").addEventListener("click", converter);

}

function log_out() {
	if (true_user == false) {
		//Change - Just for testing porpuses and replace later
		alert("Log out, You Guest");
		console.log("sds");
		window.location.href = "/login";
	} else {
		alert("You {{Username}} are being logged out");
		window.location.href = "/login";
	}
}

function profile() {
	window.location.href = "/profile";
}

function Game() {
	window.location.href = "/wordle";
}

function Calculator() {
	window.location.href = "/calculator";
}

function about() {
	window.location.href = "/about";
}

function converter() {
	window.location.href = "/converter"
}