window.addEventListener("load", Initial);

function Initial() {
	true_user = true;
    document.getElementById("btn_logout").addEventListener("click", log_out);
	
	document.getElementById("btn_profile").addEventListener("click", profile);
	
	//middle buttons
	document.getElementById("btn_games").addEventListener("click", Game);
	document.getElementById("btn_calculator").addEventListener("click", Calculator);

}

function log_out() {
	if (true_user == false) {
		//Change - Just for testing porpuses and replace later
		alert("Log out, You Guest");
		console.log("sds");
		window.location.href = "log_in.html";
	} else {
		alert("You {{Username}} are being logged out");
		window.location.href = "log_in.html";
	}
}

function profile() {
	window.location.href = "profile.html";
}

function Game() {
	window.location.href = "wordle.html";
}

function Calculator() {
	window.location.href = "calculator.html";
}