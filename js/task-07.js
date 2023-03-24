const controlFont = document.querySelector("#font-size-control");
const variable = document.querySelector("#text");

controlFont.addEventListener('change', event => {
    variable.style.fontSize = event.currentTarget.value + 'px';
});

