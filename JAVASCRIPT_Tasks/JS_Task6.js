function validateLogin() {
    const requiredInputs = document.querySelectorAll('.required');
    const errorTexts = document.querySelectorAll('#invalid');
    let isValid = true;

    requiredInputs.forEach(input => {
        if (input.value.trim() === '') {
            input.classList.add('invalid');
            isValid = false;
        }
        else {
            input.classList.remove('invalid');
        }
    });

    if (!isValid) {
        errorTexts.forEach(errorText => {
            errorText.textContent = "This field is required";
        })
    }
    else {
        errorTexts.forEach(errorText => {
            errorText.textContent = "";
        })
    }
    return isValid;
}