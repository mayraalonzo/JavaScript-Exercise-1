let currentInput = "";  


function display(value) {
    currentInput += value;  
    document.getElementById("outputscreen").value = currentInput;  
}

function Clear() {
    currentInput = "";  
    document.getElementById("outputscreen").value = "0"; 
}

function del() {
    currentInput = currentInput.slice(0, -1); 
    if (currentInput === "") {  
        document.getElementById("outputscreen").value = "0";
    } else {
        document.getElementById("outputscreen").value = currentInput;  
    }
}

function Calculate() {
    try {
        if (currentInput === "") {  
            throw "Input is empty";
        }

        if (currentInput.includes("/") && currentInput.split("/")[1] === "0") {
            throw "Cannot divide by zero";
        }
        if (/[^0-9]([+\-*/^]{2,})[^0-9]/.test(currentInput)) {
            throw "Consecutive operators are not allowed";
        }

        if (/^[+\-*/^]/.test(currentInput) || /[+\-*/^]$/.test(currentInput)) {
            throw "Expression cannot start or end with an operator";
        }
        let result = manualCalculation(currentInput);  

        document.getElementById("outputscreen").value = result;

        currentInput = result.toString();
    } catch (error) {
        alert("Error: " + error);  
        document.getElementById("outputscreen").value = "Error";  
        currentInput = "";  
    }
}

function manualCalculation(expression) {

    while (expression.includes("*")) {
        let parts = expression.split("*");
        let left = parseFloat(parts[0]);
        let right = parseFloat(parts[1]);
        let result = left * right;
        expression = expression.replace(parts[0] + "*" + parts[1], result);
    }

    while (expression.includes("/")) {
        let parts = expression.split("/");
        let left = parseFloat(parts[0]);
        let right = parseFloat(parts[1]);
        if (right === 0) {
            throw "Cannot divide by zero!";  
        }
        let result = left / right;
        expression = expression.replace(parts[0] + "/" + parts[1], result);
    }


    while (expression.includes("+")) {
        let parts = expression.split("+");
        let left = parseFloat(parts[0]);
        let right = parseFloat(parts[1]);
        let result = left + right;
        expression = expression.replace(parts[0] + "+" + parts[1], result);
    }


    while (expression.includes("-")) {
        let parts = expression.split("-");
        let left = parseFloat(parts[0]);
        let right = parseFloat(parts[1]);
        let result = left - right;
        expression = expression.replace(parts[0] + "-" + parts[1], result);
    }

    return expression;  
}
