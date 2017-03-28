var startButton = document.getElementById("start-button");
var submitName = document.getElementById("submit-name");

var lightTheme = document.getElementById("light-theme");
var darkTheme = document.getElementById("dark-theme");
var coloredTheme = document.getElementById("colored-theme");

var dashLightTheme = document.getElementById("dash-light-theme");
var dashDarkTheme = document.getElementById("dash-dark-theme");
var dashColoredTheme = document.getElementById("dash-colored-theme");

//Callback functions 
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

//Change Name on button click, set up page.
function changeName(){
  var name;
  var nameDisplay = document.getElementById("display-name");
  var dashNameDisplay = document.getElementById("dash-display-name");
  var inputForm = document.getElementById("name-input");

  name = inputForm.value;

  nameDisplay.textContent = "Welcome " + name;
  dashNameDisplay.textContent = "Welcome " + name;
};

//Event listener for name change.
submitName.addEventListener("click", changeName);

//Change to light theme
function changeLightTheme(){
    document.body.style.backgroundColor = "#e3e3e5";
    document.body.style.color = "black";
    console.log("changing THEME");
}

//Event listener to change to light theme
lightTheme.addEventListener("click", changeLightTheme);
dashLightTheme.addEventListener("click", changeLightTheme);

//Change to dark theme
function changeDarkTheme(){
    document.body.style.backgroundColor = "#202021";
    document.body.style.color = "white";
       console.log("changing THEME");
}

//Event listener to change to dark theme
darkTheme.addEventListener("click", changeDarkTheme);
dashDarkTheme.addEventListener("click", changeDarkTheme);

//Change to colored theme using random color from an array
function changeColoredTheme(){

    var colors = ['#f96666', '#66f968', '#669ef9', '#ff8114', '#ca4fff'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.color = "black";
       console.log("changing THEME");
}

//Event listener to change to colored theme
coloredTheme.addEventListener("click", changeColoredTheme);
dashColoredTheme.addEventListener("click", changeColoredTheme);

//XHR Request to get today's and tomorrow's weather from openweathermap API.
function getWeather(){
    var xhr = new XMLHttpRequest();
    var weatherTarget = document.getElementById("weathercurrent");
    var weatherLocation = document.getElementById("location");
    var weatherType = document.getElementById("weather");
    var weatherTemp = document.getElementById("temp");
    var weatherWind = document.getElementById("wind");

    var tomorrowType = document.getElementById("weathertmrrw");
    var tomorrowTemp = document.getElementById("temptmrrw");
    var tomorrowWind = document.getElementById("windtmrrw");

    xhr.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=2639996&units=metric&APPID=85f6c954f91e2a8c096daf99ee63b1fc");

    xhr.onreadystatechange = function(){
        if(xhr.readyState == XMLHttpRequest.DONE){
            if(xhr.status == 200){
                var weatherJson = xhr.responseText;
                var weatherData = JSON.parse(xhr.responseText);
                
                console.log("Ready to update weather!");

                //Set today's weather
                weatherLocation.innerHTML = "Location: " + weatherData.city.name;
                weatherType.innerHTML = "Weather: " + weatherData.list[0].weather[0].main; 
                weatherTemp.innerHTML =  "Temperature: " + weatherData.list[0].main.temp + "°C";
                weatherWind.innerHTML = "Wind speed: " + weatherData.list[0].wind.speed + "m/s";
                
                //Set tomorrow's weather
                tomorrowType.innerHTML = "Weather: " + weatherData.list[1].weather[0].main; 
                tomorrowTemp.innerHTML =  "Temperature: " + weatherData.list[1].main.temp + "°C";
                tomorrowWind.innerHTML = "Wind speed: " + weatherData.list[1].wind.speed + "m/s";
            }
            else if(xhr.status == 404){
                console.log("It's really not working");
            }
        }
    }
    xhr.send(null);
}

//XHR request to get data from newsapi and apply it into dashboard.
function getNews(){
    var xhr = new XMLHttpRequest();
    var title1 = document.getElementById("title1");
    var title2 = document.getElementById("title2");
    var title3 = document.getElementById("title3");
    var desc1 = document.getElementById("desc1");
    var desc2 = document.getElementById("desc2");
    var desc3 = document.getElementById("desc3");
    var url1 = document.getElementById("url1");
    var url2 = document.getElementById("url2");
    var url3 = document.getElementById("url3");

    xhr.open("GET", "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=513e603a4336419ca1bd9ee2b6738dd5");
    xhr.onreadystatechange = function(){
        if(xhr.readyState == XMLHttpRequest.DONE){
            if(xhr.status == 200){
                var newsJson = xhr.responseText;
                var newsData = JSON.parse(xhr.responseText);
                
                console.log("Ready to update news!");
                title1.innerHTML = newsData.articles[0].title;
                title2.innerHTML = newsData.articles[1].title;
                title3.innerHTML = newsData.articles[2].title;
                desc1.innerHTML = newsData.articles[0].description;
                desc2.innerHTML = newsData.articles[1].description;
                desc2.innerHTML = newsData.articles[2].description;
                url1.innerHTML = newsData.articles[0].url;
                url2.innerHTML = newsData.articles[1].url;
                url3.innerHTML = newsData.articles[2].url;

            }
            else if(xhr.status == 404){
                console.log("It's really not working");
            }
        }
    }
    xhr.send(null);
}

//Hide carousel and dashboard on startup until user says to start dashboard.
function startUp(){
  var carousel = document.getElementById("carousel-wrap");
  var dashboard = document.getElementById("column-wrap");

  carousel.style.display = "none";
  dashboard.style.display = "none";
}

//Show only the dashboard.
function showDashboardOnly(){
  var startUp = document.getElementById("setup-wrap");
  var carousel = document.getElementById("carousel-wrap");
  var dashboard = document.getElementById("column-wrap");

  startUp.style.display = "none";
  carousel.style.display = "block";
  dashboard.style.display = "block";

  if(dashboard.className == "hidden"){
    
    dashboard.className = "visible";
    carousel.className = "hidden";

  }

  window.setTimeout(showSlideshowOnly, 10000);
}

//Show only the carousel and time.
function showSlideshowOnly(){
  var carousel = document.getElementById("carousel-wrap");
  var dashboard = document.getElementById("column-wrap");

  if(carousel.className == "hidden"){

    carousel.className = "visible";
    dashboard.className = "hidden";
  }

  window.setTimeout(showDashboardOnly, 10000);
}

//Get current date and display on dashboard.
function getDate() {
    var today = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = today.getDate();
    var year = today.getFullYear();

    document.getElementById('date').innerHTML =
        days[today.getDay()] + " " + date + " of " + months[today.getMonth()] + " " + year;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('dashboard-clock-widget').innerHTML =
        h + ":" + m + " GMT";
     document.getElementById('carousel-clock-widget').innerHTML =
        h + ":" + m + " GMT";
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}

function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function show() {
    var todos = get_todos();

    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

document.getElementById('add').addEventListener('click', add);


var slideIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("carousel-img");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.display = "inline";
    setTimeout(carousel, 8000); // Change image every 10 seconds
}

startButton.addEventListener("click", showSlideshowOnly);

getDate();
startTime();
carousel();
show();
getNews();
getWeather();
startUp();
//showDashboardOnly();