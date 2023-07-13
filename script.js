// make stopwatch game. 
// player have to stop the timer at 0.00 but cant watch the timer.
// If the error with the player's stopped time is within 10 ms, 5000 points are awarded, and for every 10 ms away from that point, 5 stores are deducted.
// make timer(show millsecoond)
// and use bulma css framework
// make start and stop button
// when playing game, player cant click start button
// when stop button clicked, timer stop and show score
// when start button clicked, timer start and score reset

// intialize
const startbutton = document.getElementById("start");
const stopbutton = document.getElementById("stop");
const timer = document.getElementById("timer");
const score = document.getElementById("score");

//scorelate is score late.
// damage par miliseconds
// default: 5
// 1: Easy, 10: Hard
const scorelate = 5

let time = 0;
let timerId = null;
let scoreValue = 0;

// event listener and run function
startbutton.addEventListener("click", start);
stopbutton.addEventListener("click", stop);

//start button clicked, reset score and disable start button. and get current time and start timer
// and after 1sec, hide timer
//stop button clicked, stop timer and get current time. start time - stop time = absolute value. and calculate score
// and show score and enable start button
// score is calculated by 

function start() {
  // reset old score
  scoreValue = 0;
  // disable startbutton
  startbutton.disabled = true;
  // get time
  time = new Date();
  //
  timerId = setInterval(() => {
        timer.innerText = (new Date() - time) / 1000;
    }, 1);
    setTimeout(() => {
        timer.style.display = "none";
    }, 1000);
}

function stop() {
    stoptime = new Date();
    clearInterval(timerId);
    timer.style.display = "block";
    scoreValue = 5000 - (Math.abs((stoptime - time) - 10000) * scorelate);
    if ( scoreValue < 0 ) {
        scoreValue = 0;
    }
    score.innerText = scoreValue;
    startbutton.disabled = false;
    stopbutton.disabled = true;
}
