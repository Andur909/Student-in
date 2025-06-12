window.addEventListener("load", Initial);

function Initial() {
    document.getElementById("btn_back").addEventListener("click", back);
}

//Sends back the user
function back() {
    window.location.href = "/main";
}

