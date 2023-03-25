const controlFont = document.querySelector("#font-size-control");
const variable = document.querySelector("#text");

controlFont.addEventListener('input', event => {
    variable.style.fontSize = event.currentTarget.value + 'px';
});

