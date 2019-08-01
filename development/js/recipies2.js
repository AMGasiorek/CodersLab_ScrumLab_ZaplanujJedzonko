
var addRecipe = document.getElementById("add-recipe");

var allRecipies = {};

var recipeName = document.getElementById("recipe-name");
var recipeDescription = document.getElementById("recipe-description");

var newInstruction = document.getElementById("new-instruction");
var addInstructionButton = document.getElementById("add-instruction");
var instructionsList = document.getElementById("instructions");

var newIngredient = document.getElementById("new-ingredient");
var addIngredientsButton = document.getElementById("add-ingredient");
var ingredientsList = document.getElementById("ingredients");



addInstructionButton.addEventListener("click", function () {
    var newLi = document.createElement("li");
    newLi.textContent = newInstruction.value;
    instructionsList.append(newLi);
    newInstruction.value = "";
});

addIngredientsButton.addEventListener("click", function () {
    var newLi = document.createElement("li");
    newLi.textContent = newIngredient.value;
    ingredientsList.append(newLi);
    newIngredient.value = "";
});

addRecipe.addEventListener("click", function(){
    var instructionsTab = [];
    var ingredientsTab = [];
    var instructionsListElements = instructionsList.getElementsByTagName("li");
    var ingredientsListElements = ingredientsList.getElementsByTagName("li");

    for (i=0; i<ingredientsListElements.length; i++) {
        ingredientsTab.push(ingredientsListElements[i].innerText);
    }
    for (i=0; i<instructionsListElements.length; i++) {
        instructionsTab.push(instructionsListElements[i].innerText);
    }

    allRecipies[recipeName.value]={description: recipeDescription.value, instructions: instructionsTab, ingredients: ingredientsTab};
    console.log(allRecipies);
    localStorage.setItem("recipiesZJ", allRecipies);
    console.log(localStorage.getItem("recipiesZJ"));
});