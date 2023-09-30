function validateForm() {
    const form = document.getElementById('myForm');
    const requiredInputs = form.querySelectorAll('.required');
    const errorTexts = form.querySelectorAll('#errorText');
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