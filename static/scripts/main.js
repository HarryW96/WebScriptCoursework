var xhr = new XMLHttpRequest();

$('#panel-example').scotchPanel({
    containerSelector: 'body', // As a jQuery Selector
    direction: 'left', // Make it toggle in from the left
    duration: 800, // Speed in ms how fast you want it to be
    transition: 'ease', // CSS3 transition type: linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(P1x,P1y,P2x,P2y)
    clickSelector: '.toggle-panel', // Enables toggling when clicking elements of this class
    distanceX: '30%', // Size fo the toggle
    enableEscapeKey: true // Clicking Esc will close the panel
});

//Callback functions 
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

function getWeather(){
    var weatherTarget = document.getElementById("weathercurrent");
    var weatherLocation = document.getElementById("location");
    var weatherType = document.getElementById("weather");
    var weatherTemp = document.getElementById("temp");
    var weatherWind = document.getElementById("wind");

    xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=2639996&units=metric&APPID=85f6c954f91e2a8c096daf99ee63b1fc");
    xhr.onreadystatechange = function(){
        if(xhr.readyState == XMLHttpRequest.DONE){
            console.log("Ready!");
            if(xhr.status == 200){
                var weatherJson = xhr.responseText;
                var weatherData = JSON.parse(xhr.responseText);
                
                console.log("Ready to update weather!");

                weatherLocation.innerHTML = "Location: " + weatherData.name;
                weatherType.innerHTML = "Weather: " + weatherData.weather[0].main; 
                weatherTemp.innerHTML =  "Temperature: " + weatherData.main.temp + "°C";
                weatherWind.innerHTML = "Wind speed: " + weatherData.wind.speed + "m/s";
 

            }
            else if(xhr.status == 404){
                console.log("It's really not working");
            }
        }
    }
    xhr.send(null);
}

function getNews(){
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
    xhr.onreadystatechange == function(){
        if(xhr.readyState == XMLHttpRequest.DONE){
            console.log("Ready!");
            if(xhr.status == 200){
                console.log("LETS DO THIS SHIT BOIZZZ!");

            }
            else if(xhr.status == 404){
                console.log("Again, it's really not working.");
            }
        }
    }
    xhr.send(null);
}


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
    document.getElementById('clock-widget').innerHTML =
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
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 8000); // Change image every 10 seconds
}

getDate();
startTime();
carousel();
show();
getNews();
getWeather();