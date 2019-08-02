
var addRecipe = document.getElementById("add-recipe");


var recipeName = document.getElementById("recipe-name");
var recipeDescription = document.getElementById("recipe-description");

var newInstruction = document.getElementById("new-instruction");
var addInstructionButton = document.getElementById("add-instruction");
var instructionsList = document.getElementById("instructions");

var newIngredient = document.getElementById("new-ingredient");
var addIngredientsButton = document.getElementById("add-ingredient");
var ingredientsList = document.getElementById("ingredients");



addInstructionButton.addEventListener("click", function () {

    var spanTxt = document.createElement("span");

    var editButton = document.createElement("BUTTON");
    var claEdi = document.createAttribute("class");
    claEdi.value = "edit-button far fa-edit";
    editButton.setAttributeNode(claEdi);

    var deleteButton = document.createElement("BUTTON");
    var claDel = document.createAttribute("class");
    claDel.value = "delete-button far fa-trash-alt";
    deleteButton.setAttributeNode(claDel);



    var newLi = document.createElement("li");

    spanTxt.innerText = newInstruction.value;
    newLi.appendChild(spanTxt);
    newLi.appendChild(deleteButton);
    newLi.appendChild(editButton);
    instructionsList.appendChild(newLi);

    newInstruction.value = "";

    deleteButton.addEventListener("click",function () {
        this.parentElement.parentElement.removeChild(this.parentElement);
    });
    editButton.addEventListener("click",function () {
        this.parentElement.querySelector("span").setAttribute("contenteditable","true");
    });
    spanTxt.addEventListener("blur",function () {
        this.setAttribute("contenteditable","false");
    })
});

addIngredientsButton.addEventListener("click", function () {

    var spanTxt = document.createElement("span");

    var editButton = document.createElement("BUTTON");
    var claEdi = document.createAttribute("class");
    claEdi.value = "edit-button far fa-edit";
    editButton.setAttributeNode(claEdi);

    var deleteButton = document.createElement("BUTTON");
    var claDel = document.createAttribute("class");
    claDel.value = "delete-button far fa-trash-alt";
    deleteButton.setAttributeNode(claDel);

    var newLi = document.createElement("li");

    spanTxt.innerText = newIngredient.value;
    newLi.appendChild(spanTxt);
    newLi.appendChild(deleteButton);
    newLi.appendChild(editButton);
    ingredientsList.appendChild(newLi);

    newIngredient.value = "";

    deleteButton.addEventListener("click",function () {
        this.parentElement.parentElement.removeChild(this.parentElement);
    });
    editButton.addEventListener("click",function () {
        this.parentElement.querySelector("span").setAttribute("contenteditable","true");
    });
    spanTxt.addEventListener("blur",function () {
        this.setAttribute("contenteditable","false");
    })
});


addRecipe.addEventListener("click", function(){
    if (localStorage.getItem("recipiesZJ")==undefined){
        var allRecipies = {};
    }else{
        var allRecipies = JSON.parse(localStorage.getItem("recipiesZJ"));
    }

    var instructionsTab = [];
    var ingredientsTab = [];
    var instructionsListElements = instructionsList.getElementsByTagName("li");
    var ingredientsListElements = ingredientsList.getElementsByTagName("li");

    for (var i=0; i<ingredientsListElements.length; i++) {
        ingredientsTab.push(ingredientsListElements[i].querySelector("span").innerText);
    }
    for (var i=0; i<instructionsListElements.length; i++) {
        instructionsTab.push(instructionsListElements[i].querySelector("span").innerText);
    }



    allRecipies[recipeName.value]={description: recipeDescription.value, instructions: instructionsTab, ingredients: ingredientsTab};
    localStorage.setItem("recipiesZJ", JSON.stringify(allRecipies));



    var ingredientsListLength=ingredientsListElements.length;
    for (var i=0; i<ingredientsListLength; i++) {
        ingredientsListElements[0].parentElement.removeChild(ingredientsListElements[0])
    }

    var instructionsListLength=instructionsListElements.length;
    for (var i=0; i<instructionsListLength; i++) {
        instructionsListElements[0].parentElement.removeChild(instructionsListElements[0])
    }

    recipeName.value="";
    recipeDescription.value="";
});