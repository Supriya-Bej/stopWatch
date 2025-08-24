let timeDisplay = document.querySelector(".timeDisplay");
let stopBtn =document.getElementById("stopBtn");
let startBtn =document.getElementById("startBtn");
let resetBtn =document.getElementById("resetBtn");

let msec = 0;
let secs = 0;
let mins = 0;

// Here we used null means now there have no value
let timerId = null;

// Here we add a Eventlistener
startBtn.addEventListener("click", function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    //It is a inbuilt funtion setInterval function take two argument 1. is function and 2. timing and its timing always will be in mini sec
    timerId = setInterval(startTimer, 1)//here we call the funtion that return a id
});

stopBtn.addEventListener("click", function(){
        clearInterval(timerId);//Its also a inbuilt fution that take one argument
});

resetBtn.addEventListener("click", function(){
        clearInterval(timerId);//Its also a inbuilt fution that take one argument
        timeDisplay.innerHTML = `00 : 00 : 00`;
        msec = secs = mins = 0;
});


function startTimer(){
    msec++;//button press hole 1 barbe
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs==60){
            secs=0;
mins++;
        }
    }
    // Create a string
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timeDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}