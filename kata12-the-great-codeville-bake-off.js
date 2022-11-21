const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  for (let i in recipes) {
    let foundA = false;
    let foundB = false;
    foundA = ingredientCheck(bakeryA, recipes[i].ingredients);
    foundB = ingredientCheck(bakeryB, recipes[i].ingredients);
    if (foundA && foundB) {
      return (recipes[i].name); // if all ingredients found, return recipe
    }
  }
  return; // if not found, return nothing
};

const ingredientCheck = function(bakery, ingredients) {
  // need to check if recipe.ingredients can be found in bakeryA or bakeryB
  for (let i in ingredients) {
    for (let j in bakery) {
      if (ingredients[i] === bakery[j]) {
        return true;
      }
    }
  }
  return false;
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

