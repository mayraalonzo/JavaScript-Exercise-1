let currentInput = "";

// Display input value in the screen
function display(value) {
    currentInput += value;
    document.getElementById("outputscreen").value = currentInput;
}

// Clear the screen
function Clear() {
    currentInput = "";
    document.getElementById("outputscreen").value = "0";
}

// Delete the last character
function del() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === "") {
        document.getElementById("outputscreen").value = "0";
    } else {
        document.getElementById("outputscreen").value = currentInput;
    }
}

// Calculate the result
function Calculate() {
    try {
        if (currentInput === "") {
            throw "Input is empty!";
        }
        // Check for division by zero
        if (currentInput.includes("/") && currentInput.split("/")[1] === "0") {
            throw "Cannot divide by zero!";
        }
        
        let result = eval(currentInput); // eval is risky, only safe here because it's controlled
        document.getElementById("outputscreen").value = result;
        currentInput = result.toString(); // Save the result for future calculations
    } catch (error) {
        alert("Error: " + error);
        document.getElementById("outputscreen").value = "Error";
        currentInput = "";
    }
}