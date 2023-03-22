const controlFont = document.querySelector("input#font-size-control");
const variable = document.querySelector("span#text");

controlFont.addEventListener('change', event => {
    variable.style.fontSize = controlFont.value + 'px';
});

