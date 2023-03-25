const inputVal = document.querySelector('#validation-input');
function valid() {
    inputVal.classList.add('valid');
    inputVal.classList.remove('invalid');
}
function invalid() {
    inputVal.classList.add('invalid');
    inputVal.classList.remove('valid');
}
inputVal.addEventListener('blur', event => {
    if (
        event.currentTarget.value.length ===
        Number(event.currentTarget.dataset.length)
    ) {
        valid();
    } else {
        invalid();
    }
});