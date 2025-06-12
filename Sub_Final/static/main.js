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
//Logs Out User
//Removed old log_out since it doesnt work
function log_out() {
	alert("You are Being Logged Out");
	window.location.href = "/login";
}

//Remove Profile as the page was removed

//Game clicked
function Game() {
	window.location.href = "/wordle";
}

//Calculator CLicked
function Calculator() {
	window.location.href = "/calculator";
}

//About CLicked
function about() {
	window.location.href = "/about";
}

//Converter CLicked
function converter() {
	window.location.href = "/converter"
}
