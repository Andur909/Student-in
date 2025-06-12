var secretWord = "";
var attempts = 0;

window.addEventListener("load", Initial);

//Sets It
function Initial() {
    document.getElementById("btn_back").addEventListener("click", Back);

    document.getElementById("btn_english").addEventListener("click", English);

    document.getElementById("btn_spanish").addEventListener("click", Spanish);

    document.getElementById("btn_submit").addEventListener("click", submitGuess);
}

//Sends User to Main
function Back() {
    window.location.href = "/main";
}

function English() {
    fetchWord("english");
}

function Spanish() {
    fetchWord("spanish");
}

//This took forever
function fetchWord(lang) {
    fetch("/get_word", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "lang=" + lang
    })
    .then(res => res.text())
    .then(word => {
        secretWord = word.toLowerCase();
        document.getElementById("language_select").style.display = "none";
        document.getElementById("game_area").style.display = "block";
        document.getElementById("lang_label").textContent = lang.toUpperCase();
    });
}

//Submits it and checks that the requirements are met
function submitGuess() {
    var guessInput = document.getElementById("btn_input");
    var guess = guessInput.value.toLowerCase();

    if (guess.length != 5) {
        document.getElementById("message").textContent = "Please enter a 5-letter word.";
        return;
    }

    if (attempts >= 6) return;

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

    //End Game
    if (guess == secretWord) {
        document.getElementById("message").textContent = "🎉 Correct!";
        disableInput();
    } else if (attempts >= 6) {
        document.getElementById("message").textContent = "❌ Out of tries! Word was: " + secretWord;
        disableInput();
    }
}

//Presnets user from trying again
function disableInput() {
    document.getElementById("btn_input").disabled = true;
    document.getElementById("btn_submit").disabled = true;
}
