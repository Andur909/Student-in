window.addEventListener("load", Initial);

var current = "";
var operator = "";
var operand = null;

function Initial() {
    document.getElementById("btn_back").addEventListener("click", goBack);
    document.getElementById("switch_mode").addEventListener("click", switchMode);

    document.getElementById("btn_0").addEventListener("click", btn_0_click);
    document.getElementById("btn_1").addEventListener("click", btn_1_click);
    document.getElementById("btn_2").addEventListener("click", btn_2_click);
    document.getElementById("btn_3").addEventListener("click", btn_3_click);
    document.getElementById("btn_4").addEventListener("click", btn_4_click);
    document.getElementById("btn_5").addEventListener("click", btn_5_click);
    document.getElementById("btn_6").addEventListener("click", btn_6_click);
    document.getElementById("btn_7").addEventListener("click", btn_7_click);
    document.getElementById("btn_8").addEventListener("click", btn_8_click);
    document.getElementById("btn_9").addEventListener("click", btn_9_click);

    document.getElementById("btn_dot").addEventListener("click", btn_dot_click);
    document.getElementById("btn_plus").addEventListener("click", btn_plus_click);
    document.getElementById("btn_minus").addEventListener("click", btn_minus_click);
    document.getElementById("btn_multiply").addEventListener("click", btn_multiply_click);
    document.getElementById("btn_divide").addEventListener("click", btn_divide_click);
    document.getElementById("btn_equal").addEventListener("click", btn_equal_click);

    document.getElementById("btn_sign").addEventListener("click", btn_sign_click);
    document.getElementById("btn_clear").addEventListener("click", btn_clear_click);
    document.getElementById("btn_delete").addEventListener("click", btn_delete_click);
    document.getElementById("btn_ce").addEventListener("click", btn_ce_click);
    document.getElementById("btn_percent").addEventListener("click", btn_percent_click);
    document.getElementById("btn_sqrt").addEventListener("click", btn_sqrt_click);
    document.getElementById("btn_square").addEventListener("click", btn_square_click);
    document.getElementById("btn_inv").addEventListener("click", btn_inv_click);
}

function goBack() {
    window.location.href = "/main";
}

function switchMode() {
    var label = document.getElementById("mode_label");
    if (label.textContent == "Standard") {
        label.textContent = "Scientific";
    }
    else {
        label.textContent = "Standard";
    }
}

function updateDisplay() {
    var display = document.getElementById("display");
    if (current == "") {
        display.textContent = "0";
    }
    else {
        display.textContent = current;
    }
}

// Number buttons
function btn_0_click() { 
    current += "0"; updateDisplay(); 
    }
function btn_1_click() { 
    current += "1"; updateDisplay(); 
    }
function btn_2_click() { 
    current += "2"; updateDisplay(); 
    }
function btn_3_click() { 
    current += "3"; updateDisplay(); 
    }
function btn_4_click() { 
    current += "4"; updateDisplay(); 
    }
function btn_5_click() { 
    current += "5"; updateDisplay(); 
    }
function btn_6_click() { 
    current += "6"; updateDisplay(); 
    }
function btn_7_click() { 
    current += "7"; updateDisplay(); 
    }
function btn_8_click() { 
    current += "8"; updateDisplay(); 
    }
function btn_9_click() { 
    current += "9"; updateDisplay(); 
    }

function btn_dot_click() {
    if (current.indexOf(".") == -1) {
        if (current == "") {
            current = "0";
        }
        current += ".";
        updateDisplay();
    }
}

// Operators
function btn_plus_click() { 
    operator_click("+"); 
    }
function btn_minus_click() { 
    operator_click("−"); 
    }
function btn_multiply_click() { 
    operator_click("×"); 
    }
function btn_divide_click() { 
    operator_click("÷"); 
    }

function operator_click(op) {
    if (current != "") {
        operand = current;
        operator = op;
        current = "";
    }
}

function btn_equal_click() {
    var display = document.getElementById("display");

    if (operator != "" && operand != null && current != "") {
        var a = parseFloat(operand);
        var b = parseFloat(current);
        var result = 0;

        if (operator == "+") {
            result = a + b;
        }
        else if (operator == "−") {
            result = a - b;
        }
        else if (operator == "×") {
            result = a * b;
        }
        else if (operator == "÷") {
            if (b == 0) {
                result = "Error";
            }
            else {
                result = a / b;
            }
        }

        current = result.toString();
        operand = null;
        operator = "";
        display.textContent = current;
    }
}

// Special functions
function btn_sign_click() {
    if (current[0] == "-") {
        var newStr = "";
        for (var i = 1; i < current.length; i++) {
            newStr += current[i];
        }
        current = newStr;
    }
    else {
        current = "-" + current;
    }
    updateDisplay();
}

function btn_clear_click() {
    current = "";
    operator = "";
    operand = null;
    updateDisplay();
}

function btn_ce_click() {
    current = "";
    updateDisplay();
}

function btn_delete_click() {
    var newStr = "";
    for (var i = 0; i < current.length - 1; i++) {
        newStr += current[i];
    }
    current = newStr;
    updateDisplay();
}

// Math functions
function btn_sqrt_click() {
    if (current != "") {
        var num = parseFloat(current);
        if (num < 0) {
            current = "Error";
        }
        else {
            current = Math.sqrt(num).toString();
        }
        updateDisplay();
    }
}

function btn_square_click() {
    if (current != "") {
        var num = parseFloat(current);
        current = (num * num).toString();
        updateDisplay();
    }
}

function btn_inv_click() {
    if (current != "") {
        var num = parseFloat(current);
        if (num == 0) {
            current = "Error";
        }
        else {
            current = (1 / num).toString();
        }
        updateDisplay();
    }
}

function btn_percent_click() {
    if (current != "") {
        var num = parseFloat(current);
        current = (num / 100).toString();
        updateDisplay();
    }
}
