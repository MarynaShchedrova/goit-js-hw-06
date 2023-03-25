const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

function handleInputChange(event) {
    const input = event.currentTarget.value.trim();
    if (input !== '') {
        output.textContent = `${input}`;
    } else {
        output.textContent = 'Anonymous';
    }

};

textInput.addEventListener('input', handleInputChange);