window.addEventListener("load", Initial);

function Initial() {
    document.getElementById("btn_back").addEventListener("click", Back);
    document.getElementById("btn_convert").addEventListener("click", Convert);
}

function Back() {
    window.location.href = "/main";
}

function Convert() {
    var type = document.getElementById("conversion_type").value;
    var value = parseFloat(document.getElementById("input_value").value);
    var result = "";

    if (isNaN(value)) {
        result = "Please enter a number.";
    }
    else {
        if (type == "ftoc") {
            result = ((value - 32) * 5 / 9).toFixed(2) + " °C";
        }
        else if (type == "ctof") {
            result = ((value * 9 / 5) + 32).toFixed(2) + " °F";
        }
        else if (type == "mi_km") {
            result = (value * 1.60934).toFixed(2) + " km";
        }
        else if (type == "km_mi") {
            result = (value / 1.60934).toFixed(2) + " mi";
        }
        else if (type == "lb_kg") {
            result = (value * 0.453592).toFixed(2) + " kg";
        }
        else if (type == "kg_lb") {
            result = (value / 0.453592).toFixed(2) + " lb";
        }
        else if (type == "in_cm") {
            result = (value * 2.54).toFixed(2) + " cm";
        }
        else if (type == "cm_in") {
            result = (value / 2.54).toFixed(2) + " in";
        }
        else {
            result = "Invalid type.";
        }
    }

    document.getElementById("result_output").textContent = result;
}
