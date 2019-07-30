console.clear();

var userButton = document.querySelector('#userButton');

userButton.addEventListener('click', function(){
    var userName = document.querySelector('#userNameInput').value
    localStorage.setItem('savedName', userName);
    console.log("Twoje imię to: ", localStorage.savedName);
})