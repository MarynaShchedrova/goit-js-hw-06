const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.getElementById("ingredients");
const ingredientUp = ingredients.map(ingrient => {
  return `<li class="item">${ingrient}</li>`
})
console.log(ingredientUp);
ulList.innerHTML = ingredientUp.join('');
