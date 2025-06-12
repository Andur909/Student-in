window.addEventListener("load", Initial);

function Initial() {
    document.getElementById("btn_back").addEventListener("click", back);
}


function back() {
    window.location.href = "/main";
}

