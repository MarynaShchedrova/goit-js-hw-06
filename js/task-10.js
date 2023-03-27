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
let lastEl = 20;
const createBoxes = amount => {

  const elementsToAdd = [];

  for (let i = 1; i <= amount; i++) {
    element = lastEl + 10 * i;

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

  let boxesToAdd = createBoxes(+inputNum.value);
  boxes.append(...boxesToAdd);

});

console.log(inputNum.value);

const destroyBoxes = () => {
  boxes.innerHTML = '';
  lastEl = 0;
  inputNum.value = '';
};

btnDestroy.addEventListener('click', () => {
  destroyBoxes();
});
