$('#panel-example').scotchPanel({
    containerSelector: 'body', // As a jQuery Selector
    direction: 'left', // Make it toggle in from the left
    duration: 800, // Speed in ms how fast you want it to be
    transition: 'ease', // CSS3 transition type: linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(P1x,P1y,P2x,P2y)
    clickSelector: '.toggle-panel', // Enables toggling when clicking elements of this class
    distanceX: '30%', // Size fo the toggle
    enableEscapeKey: true // Clicking Esc will close the panel
});

function getDate() {
  var today = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
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

$(document).ready(function() {
  $.simpleWeather({
    woeid: '2357536', //2357536
    location: 'Portsmouth, UK',
    unit: 'c',
    success: function(weather) {
      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;F</li></ul>';

      for(var i=0;i<weather.forecast.length - 5;i++) {
        html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'&deg' + weather.units.temp +'</p>';
      }

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});

getDate();
startTime();
carousel();
show();
