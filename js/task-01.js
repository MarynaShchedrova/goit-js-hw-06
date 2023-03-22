const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

const categoryElm = allCategories.forEach(elem => {
    const array1 = elem.firstElementChild;
    console.log(`Category:`, array1.textContent);
    const itemsElm = elem.querySelectorAll("li");
    console.log(`Elements: ${itemsElm.length}`);
})
