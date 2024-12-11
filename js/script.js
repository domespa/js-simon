// DOM ELMS
const countdownElm = document.getElementById("countdown");
const showNumberElm = document.getElementById("show-number");
const rememberNumberElm = document.getElementById("remember-number");
const inputOneElm = document.getElementById("Input1");
const inputTwoElm = document.getElementById("Input2");
const inputThreeElm = document.getElementById("Input3");
const inputFourElm = document.getElementById("Input4");
const inputFiveElm = document.getElementById("Input5");

// VARIABLES
let seconds = 5;

// MAIN
const countdownID = setInterval(() => {
    if(seconds === 0) {
        clearInterval(countdownID);
        countdownElm.innerHTML = "Memorizzati?";
    } else {
        countdownElm.innerHTML = seconds;
    }
    
    seconds--;
}, 1000);