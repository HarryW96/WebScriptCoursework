var welcomebutton = document.getElementById('welcome-button');

welcomebutton.addEventListener('click', changeUsername;

function changeUsername(){
  var nameValue = document.getElementById('nameinput').value;
  var greeting = document.getElementsByClassName('greeting');

  greeting.innerHTML = "Welcome " + nameValue;
}
