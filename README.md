# Web Script Coursework UoP 2016/2017
#https://github.com/HarryW96/WebScriptCoursework.git 

Repository used for University of Portsmouth year 2 web scripting coursework.

Student Number: UP785080.

Single page dashboard application for use in office or work environment designed to allow a user to see a number of sections of information quickly and easily from different sources. Primarily designed around what I personally would like from a dashboard and would be ideally used on a touch screen in a accessible space where the user can interact with the dashboard as needed.

Built using HTML, CSS, Vanilla JS and Node.

Single page effect produced using opacity and display via CSS.

##To use:

git clone or download zip from GitHub.

npm install

npm run dashboard

go to localhost:8080

##Features:

###Personalised Name
User can enter name on startup page which will then follow them through to the main dashboard screen as a friendly welcome.

###Themes
Able to choose from a selection of themes for the dashboard such as light, dark and coloured. Clicking on coloured multiple times changes the colours based on an array from within the code. Theme change available on both startup and dashboard screens.

###Screen Fade
Once the dashboard has been started the screen will fade in between 2 states of the dashboard and a image carousel. The user can decide how quickly these will transition from the front start up page.

###Carousel
Image carousel showing a number of images taken from unsplash.com before being minimised and then added to the slideshow.

###News
News widget displays top 3 stories from a number of different sources as decidable by the user from the drop down menu on the main dashboard view. This allows the user to quickly swap out which news source they wish to hear from whilst only getting the most important information from those sources. All data pulled in from https://newsapi.org/.

###Date and Time
Date and time shown on main dashboard as well as time being shown on the carousel page. Time based on users computer ad well as date based on current date according to PC.

###Quote of the day
Inspirational quotes pulled in daily from https://theysaidso.com/api/ where the quote itself and the author are then shown on the dashboard page.

###Weather
Weather displayed for current day and also tomorrow. Location weather displayed for decided by user from dashboard drop down menu. All data pulled in in a JSON format from http://openweathermap.org/ before being added to dashboard via JavaScript function.

###To do list
To do list created in JavaScript allows the user to add and delete items to the list from the main dashboard view to help keep track of daily targets or goals whilst the dashboard cycles through.

###Twitter Feed
Twitter feed currently showing tweets from @NodeJS twitter handle, able to scroll up and down to view more tweets.
