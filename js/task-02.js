const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.getElementById("ingredients");
const foodIngredients = ingredients.forEach(ingredient => {
  const items = document.createElement("li");
  items.innerHTML = ingredient;
  ulList.append(items);
  parent.append(...items)
});

console.log(foodIngredients);