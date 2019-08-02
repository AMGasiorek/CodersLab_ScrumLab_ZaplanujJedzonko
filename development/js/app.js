console.clear();

var oo={"Grzegorz":{"log":1,"war":"dhfhj"},"wac":{"hfgurf":234,"huy":1234}};
console.log(oo);

var userButton = document.querySelector('#userButton');


userButton.addEventListener('click', function(){
    var userName = document.querySelector('#userNameInput').value;
    localStorage.setItem('savedName', userName);
    // console.log("Twoje imię to: ", localStorage.savedName);

    document.querySelector('header .name span').innerText = userName;
    document.querySelector('.appsection').style.display = "none";
    document.querySelector('.desktop').style.display = "flex";

});

document.addEventListener('DOMContentLoaded', function (){

    if (localStorage.getItem("savedName") !== null) {
        document.querySelector('header .name span').innerText = localStorage.getItem("savedName");
        document.querySelector('.appsection').style.display = "none";
        document.querySelector('.desktop').style.display = "flex";
    } else {
        document.querySelector('header .name span').innerText="Imię";
        document.querySelector('.appsection').style.display = "flex";
        document.querySelector('.desktop').style.display = "none";
    }


});

function recipies (name, description, instruction, ingredients) {
    this.name = name;
    this.description = description;
    this.instructions = instruction;
    this.ingredients = ingredients;
}
