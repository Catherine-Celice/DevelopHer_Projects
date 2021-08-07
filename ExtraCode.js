


// Code removed from the createCard() function that made the front of the cards and the blank spaces for the cards.
// commented out code HERE is code tha remains in the orginal function


//function createCard(i, myObj){

    const card = document.createElement('div');       // In original function, but this will be needed when you create the front or an empty space.
    const face = document.createElement('div');
    //const back = document.createElement('div');
    const blankSpace = document.createElement('div');

    const faceImage = document.createElement('img');
    //const backImage = document.createElement('img');

    card.classList.add('card');
    face.classList.add('cardFace');
    // back.classList.add('cardBank');
    blankSpace.classList.add('cardEmpty');


    board.appendChild(card);
    card.appendChild(face);
    face.appendChild(faceImage);
    faceImage.src = myObj.faceImage;

    // card.appendChild(back);
    // back.appendChild(backImage);
    // backImage.src = myObj.backImage;
    
    card.appendChild(blankSpace);

    // card.setAttribute("showing", "back");
    // const pos = toString(i);
    // card.setAttribute("position", pos);


//} // end of createCard()


From: https://www.ostraining.com/blog/coding/stopwatch/


// initialize your variables outside the function 
var count = 0; 
var clearTime; 
var seconds = 0, minutes = 0, hours = 0; 
var clearState; 
var secs, mins, gethours ; 
function startWatch( ) { 
    /* check if seconds is equal to 60 and add a +1 to minutes, and set seconds to 0 */ 
    if ( seconds === 60 ) { seconds = 0; minutes = minutes + 1; } /* 
    you use the javascript tenary operator to format how the minutes should look and add 0 to minutes if less than 10 */ 
    mins = ( minutes < 10 ) ? ( '0' + minutes + ': ' ) : ( minutes + ': ' ); 
    /* check if minutes is equal to 60 and add a +1 to hours set minutes to 0 */ 
    if ( minutes === 60 ) { minutes = 0; hours = hours + 1; } 
    /* you use the javascript tenary operator to format how the hours should look and add 0 to hours if less than 10 */ 
    gethours = ( hours < 10 ) ? ( '0' + hours + ': ' ) : ( hours + ': ' ); secs = ( seconds < 10 ) ? ( '0' + seconds ) : ( seconds ); 
    // display the stopwatch 
    var x = document .getElementById("timer"); 
    x.innerHTML = 'Time: ' + gethours + mins + secs; 
    /* call the seconds counter after displaying the stop watch and increment seconds by +1 to keep it counting */ 
    seconds++; /* 
    call the setTimeout( ) to keep the stop watch alive ! */ 
    clearTime = setTimeout( "startWatch( )", 1000 ); } 
    // startWatch( ) //create a function to start the stop watch 

function startTime( ) { 
    /* check if seconds, minutes, and hours are equal to zero and start the stop watch */ 
    if ( seconds === 0 && minutes === 0 && hours === 0 ) { 
        /* hide the fulltime when the stop watch is running */ 
        var fulltime = document.getElementById( "fulltime" ); 
        fulltime.style.display = "none"; 
        /* hide the start button if the stop watch is running */ 
        this.style.display = "none"; 
        /* call the startWatch( ) function to execute the stop watch whenever the startTime( ) is triggered */ 
        startWatch( ); } 
        // if () } 
        // startTime() 
        /* you need to bind the startTime( ) function to any event type to keep the stop watch alive ! */
         window.addEventListener( 'load', function ( ) { 
             var start = document .getElementById("start"); 
             start.addEventListener( 'click', startTime );
            }); // startwatch.js end 


//create a function to stop the time 
function stopTime( ) { 
    /* check if seconds, minutes and hours are not equal to 0 */ 
    if ( seconds !== 0 || minutes !== 0 || hours !== 0 ) { 
        /* display the full time before reseting the stop watch */ 
        var fulltime = document .getElementById( "fulltime" ); 
        //display the full time fulltime.style.display = "block"; 
        var time = gethours + mins + secs; 
        fulltime.innerHTML = 'Fulltime: ' + time; 
        // reset the stop watch 
        seconds = 0; 
        minutes = 0; 
        hours = 0; 
        secs = '0' + seconds; 
        mins = '0' + minutes + ': '; 
        gethours = '0' + hours + ': '; 
        /* display the stopwatch after it's been stopped */ 
        var x = document.getElementById ("timer"); 
        var stopTime = gethours + mins + secs; x.innerHTML = stopTime; 
        /* display all stop watch control buttons */ 
        var showStart = document.getElementById ('start'); 
        showStart.style.display = "inline-block"; 
        var showStop = document.getElementById ("stop"); 
        showStop.style.display = "inline-block"; 
        /* clear the stop watch using the setTimeout( ) return value 'clearTime' as ID */ 
        clearTimeout( clearTime ); } 
        // if () } 
        // stopTime() 
        /* you need to call the stopTime( ) function to terminate the stop watch */ 
        window.addEventListener( 'load', function ( ) { 
            var stop = document.getElementById ("stop"); 
            stop.addEventListener( 'click', stopTime );
         }); // stopwatch.js end 







The CSS

 #stopWatch { width: 280px; height: auto; text-align: center; display: block; padding: 5px; margin: 0 auto; } #timer, #fulltime { width: auto; height: auto; padding: 10px; font-weight: bold; font-family: tahoma; display: block; border: 1px solid #eee; text-align: center; box-shadow: 0 0 5px #ccc; background: #fbfbf0; color: darkblue; border-bottom:4px solid darkgrey; } button { cursor: pointer; font-weight: 700; } #fulltime { display:none; font-size:16px; font-weight:bold; } 

The HTML

 <!DOCTYPE html> <html lang="en"> <head> <title> JavaScript Stop Watch </title> <style text="text/css"> </style> <script type="text/javascript"> </script> </head> <body> <section id="stopWatch"> <p id="timer"> Time : 00:00:00 </p> <button id="start"> Start </button> <button id="stop"> Stop </button> <p id="fulltime"> </p> </section> </body> </html> 

The stop watch is completed, and this is how it should look.

A small timer with start and stop buttons

About the author
John Zenith is a front-end developer, writer, speaker, and a code builder who loves Javascript, CSS and PHP. He lives in the southern part of Nigeria.

Comments (13)

    Max_Max Friday, 24 February 2017
    cool

    John zenith Tuesday, 11 April 2017
    Thanks Max.

ProsaicHacker Tuesday, 12 June 2018
I need a single page browser stopwatch and no external dependencies. this looked promising.

For us mere mortals to whom building a page is a rare and therefore new experience each time, could you have a single page version of the final product. Cutting and pasting the piece together I had to add closing braces for both "start" and "stop" functions to get the console to stop complaining. No yet sure if it was my mistake or yours. Also the buttons do not work I do not know why.

    Joe Hawthorn Friday, 21 February 2020
    Please see stopwatch.js for a clean vanilla JS solution.

Kalalakshmi Thursday, 07 November 2019
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<script>
var upgradeTime = 1;
var seconds = upgradeTime;
function timer() {
  var days        = Math.floor(seconds/24/60/60);
  var hoursLeft  = Math.floor((seconds) - (days*86400));
  var hours      = Math.floor(hoursLeft/3600);
  var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
  var minutes    = Math.floor(minutesLeft/60);
  var remainingSeconds = seconds % 60;
  function pad(n) {
    return (n < 10 ? "0" + n : n);
   
  }
  document.getElementById('countdown').innerHTML =pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "Completed";
  } else {
    seconds++;
  }
}
var countdown = setInterval('timer()', 1000);

</script>
</head>
<body>
<span id="countdown" class="timer"></span>
</body>

</html>

    indraraj Thursday, 23 April 2020
    how can we stop it .Can you reply with code

Meera Monday, 08 June 2020
How can we stop it ? and how we can start it?
Can we Provide button with a timer class?
I already tried?
meeta Friday, 31 July 2020
how to stop the timerr
vaishnavi Thursday, 10 December 2020
can plz include how to stop it and restart again

Reconnecting... Sunday, 13 September 2020
It doesn't work...???
Anshika Thursday, 26 November 2020
Hey there, I m not from the team but I can give you the codes for a wonderful gold stop watch which is not really available on google chrome, just follow my steps
1. Copy the code given below (from <html>)
2. Paste it on notepad.exe
3. Now save the file with the name, watch.html, with unicode format

CODE:
<!DOCTYPE html>
<html lang="en" >

<head>

  <meta charset="UTF-8">
 
<link rel="apple-touch-icon" type="image/png" href="static.codepen.io/assets/favicon/apple-t...f7a952f3060705ee.png" />
<meta name="apple-mobile-web-app-title" content="CodePen">

<link rel="shortcut icon" type="image/x-icon" href="static.codepen.io/assets/favicon/favicon...7743096d55480f33.ico" />

<link rel="mask-icon" type="" href="static.codepen.io/assets/favicon/logo-pi...5596661b4e2132cc.svg" color="#111" />


  <title>CodePen - Gold Stopwatch</title>
 
 
 
 
<style>
body {
  background-color: #2c3347;
  color: #ffffff;
}

h1 {
  font-size: 48px;
  font-family: "Montserrat", sans-serif;
  font-weight: 200;

  text-align: center;
  line-height: 59px;

  padding: 0 64px;
  margin: 0;
}

.stopwatch {
  display: grid;
  justify-items: center;
  grid-row-gap: 23px;
  width: 100%;
  padding-top: 25px;
}

.circle {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 270px;
  width: 270px;

  border: 2px solid;
  border-radius: 50%;
}

.time {
  font-family: "Roboto Mono", monospace;
  font-weight: 300;
  font-size: 48px;
}

.gold {
  font-weight: 900;

  color: #f2c94c;
  text-shadow: 0 0 0px #fff, 0 0 50px #f2c94c;
}

.controls {
  display: flex;
  justify-content: space-between;

  width: 187px;
}

button {
  cursor: pointer;
  background: transparent;
  padding: 0;
  border: none;
  margin: 0;
  outline: none;
}

#playButton {
  display: block;
}

#pauseButton {
  display: none;
}
</style>

  <script>
  window.console = window.console || function(t) {};
</script>

 
 
  <script>
  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }
</script>


</head>

<body translate="no" >
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gold Stopwatch</title>
    <link rel="stylesheet" href="style.css" />
    <link
      href="fonts.googleapis.com/css2?family=Montser...200;900&display=swap"
      rel="stylesheet"
    />
    <link
      href="fonts.googleapis.com/css2?family=Roboto+...0;1,300&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <div class="stopwatch">
      <h1><span class="gold">GOLD</span> STOPWATCH</h1>
      <div class="circle">
        <span class="time" id="display">00:00:00</span>
      </div>

      <div class="controls">
        <button class="buttonPlay">
          <img id="playButton" src="res.cloudinary.com/https-tinloof-com/ima...ay-button_opkxmt.svg" />

          <img id="pauseButton" src="res.cloudinary.com/https-tinloof-com/ima...se-button_pinhpy.svg" />
        </button>

        <button class="buttonReset">
          <img id="resetButton" src="res.cloudinary.com/https-tinloof-com/ima...et-button_mdv6wf.svg" />
        </button>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
    <script src="static.codepen.io/assets/common/stopExec...6915e8726e5d9f147.js"></script>

 
 
      <script id="rendered-js" >
// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

// Declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;

// Create function to modify innerHTML

function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

// Create "start", "pause" and "reset" functions

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  showButton("PAUSE");
}

function pause() {
  clearInterval(timerInterval);
  showButton("PLAY");
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
  showButton("PLAY");
}

// Create function to display buttons

function showButton(buttonKey) {
  const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
  const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
  buttonToShow.style.display = "block";
  buttonToHide.style.display = "none";
}
// Create event listeners

let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);
//# sourceURL=pen.js
    </script>

 

  <script src="static.codepen.io/assets/editor/iframe/i...aadaa63ed5d970b37.js"></script>
</body>

</html>

I hope it works for yall...

    vaishnavi Thursday, 10 December 2020
    thanku

Shridhar Upadhyay Wednesday, 02 June 2021
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>clock projecet</title>
    <!-- <meta http-equiv="refresh" content="1"> -->
    <style>
        body{
            /* display: flex; */
            /* justify-content: center; */
            /* align-items: center; */
            /* min-height: 100vh; */
            background: #091921;
        }
        #clock{
            font-size: 90px;
            text-align: center;
            color: #24ff10;
        }
    </style>
</head>
<body>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <script>
        setInterval(displayclock, 500);
    function displayclock(){
        var time = new Date;
        var hr = time.getHours();
        var min =time.getMinutes();
        var sec =time.getSeconds();
        if (hr == 0){
        hr= 12;
    }
    if (hr > 12){
        hr = hr - 12;
    }
    document.getElementById('clock').innerHTML = hr + ':' + min + ':' + sec;
    }
    </script>
    <div id="clock">
    </div>
</body>
</html>

javascript

Join OSTraining and get the JAVASCRIPT Explained book!

Popular New Posts

    How to Set Up a Drupal Workflow in cPanel with Git
    OSTips - How to Display a PDF in Browser with Drupal 9 & 8
    WordFest Live Summer 2021 Starts tomorrow!

Blog Categories

    WordPress Tutorials
    WooCommerce Tutorials
    Drupal Tutorials
    Joomla Tutorials
    Magento Tutorials
    General
    Coding Tutorials
    OSTraining News
    Web Design News
    Podcasts

Blog License

All our blog posts are published under the Creative Commons Attribution-NonCommercial license:

    You can re-use these tutorials.
    You can modify these tutorials.
    You must link back to our original tutorial.
    You can't use these tutorials commercially.

Full license details.




