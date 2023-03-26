function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector("#controls > input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

let element;
let lastEl = 0;
const createBoxes = amount => {

  const elementsToAdd = [];

  for (let i = 0; i < amount; i++) {
    element = lastEl + 30 + 10 * i;
    const div = document.createElement('div');
    div.style.height = element + 'px';
    div.style.width = element + 'px';
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);

  }
  lastEl = element;
  return elementsToAdd;
};


btnCreate.addEventListener('click', () => {

  let boxesToAdd = createBoxes(inputNum.value);
  boxes.append(...boxesToAdd);

});

console.log(inputNum.value);

const destroyBoxes = () => {
  boxes.innerHTML = '';
};

btnDestroy.addEventListener('click', () => {
  destroyBoxes.call();
  lastEl = 0;
  inputNum.value = '';
});
