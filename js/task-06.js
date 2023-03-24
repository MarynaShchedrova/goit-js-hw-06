const inputVal = document.querySelector('#validation-input');

inputVal.addEventListener('blur', event => {
    if (
        event.currentTarget.value.length ===
        Number(event.currentTarget.dataset.length)
    ) {
        inputVal.classList.add('valid');
        inputVal.classList.remove('invalid');
    } else {
        inputVal.classList.add('invalid');
        inputVal.classList.remove('valid');
    }
});