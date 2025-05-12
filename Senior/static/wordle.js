//Learned How to use arrays in javascript and other things
window.addEventListener("load", Initial);

var secretWord = "apple";
var attempts = 0;
var maxAttempts = 6;

function Initial() {
    document.getElementById("btn_submit").addEventListener("click", submitGuess);
    document.getElementById("btn_back").addEventListener("click", back);
}

function submitGuess() {
    var guessInput = document.getElementById("btn_input");
    var guess = guessInput.value.toLowerCase();

    if (guess.length != 5) {
        document.getElementById("message").textContent = "Please enter a 5-letter word.";
        return;
    }

    if (attempts >= maxAttempts) return;

    for (var i = 0; i < 5; i++) {
        var box = document.getElementById("tile-" + attempts + "-" + i);
        box.textContent = guess[i];

        if (guess[i] == secretWord[i]) {
            box.style.backgroundColor = "green";
            box.style.color = "white";
        } else if (secretWord.indexOf(guess[i]) != -1) {
            box.style.backgroundColor = "orange";
            box.style.color = "white";
        } else {
            box.style.backgroundColor = "gray";
            box.style.color = "white";
        }
    }

    attempts += 1;
    guessInput.value = "";

    if (guess == secretWord) {
        document.getElementById("message").textContent = "Nice! YOut got this!!";
        disableInput();
    } else if (attempts >= maxAttempts) {
        document.getElementById("message").textContent = "Out of tries! Word: " + secretWord;
        disableInput();
    }
}

function disableInput() {
    document.getElementById("btn_input").disabled = true;
    document.getElementById("btn_submit").disabled = true;
}

function back() {
	window.location.href = "main.html";
}
