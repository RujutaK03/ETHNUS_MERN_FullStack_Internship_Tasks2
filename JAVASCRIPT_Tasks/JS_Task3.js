function multiply() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let product = num1 * num2;
        document.getElementById("result").innerHTML = "The result is : " + product;
    }
    else {
        document.getElementById("result").innerHTML = "Please provide valid input";
    }
}

function divide() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let quotient = num1 / num2;
        document.getElementById("result").innerHTML = "The result is : " + quotient;
    }
    else {
        document.getElementById("result").innerHTML = "Please provide valid input";
    }
}