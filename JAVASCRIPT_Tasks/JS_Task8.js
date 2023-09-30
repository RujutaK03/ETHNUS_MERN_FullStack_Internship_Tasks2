function validateLogin(event) {
    const requiredInputs = document.querySelectorAll('.required');
    const errorTexts = document.querySelectorAll('#invalid');
    const RegisterButton = document.getElementById("RegisterButton")
    let isValid = true;
    let i = 0;

    requiredInputs.forEach(input => {
        if (input.value.trim() === '') {
            errorTexts[i].textContent = "POOR";
            isValid = false;
        }
        else {
            errorTexts[i].textContent = "";

        }
        i += 1;
    });

    if (!isValid) {
        event.preventDefault();
        validatePassword(requiredInputs[3], requiredInputs[4], errorTexts[3], errorTexts[4]);
    }
}

function validatePassword(pass1, pass2, text1, text2) {
    if (pass1.value.trim() != '' || pass2.value.trim() != '') {
        if (pass1.value != pass2.value) {
            text1.textContent = "";
            text2.textContent = "MISMATCH";
        }
        else {
            text1.textContent = "";
            text2.textContent = "";
        }
    }
}