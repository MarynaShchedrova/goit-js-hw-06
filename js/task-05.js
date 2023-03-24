const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

function handleInputChange(event) {
    output.textContent = event.currentTarget.value;
    if (event.currentTarget.value.trim() === '') {
        output.textContent = 'Anonymous';
    }
};

textInput.addEventListener('input', handleInputChange);