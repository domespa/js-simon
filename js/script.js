// DOM ELMS
const countdownElm = document.getElementById("countdown");
const showNumberElm = document.getElementById("show-number");
const rememberNumberElm = document.getElementById("remember-number");
const inputOneElm = document.getElementById("Input1");
const inputTwoElm = document.getElementById("Input2");
const inputThreeElm = document.getElementById("Input3");
const inputFourElm = document.getElementById("Input4");
const inputFiveElm = document.getElementById("Input5");
const buttonElm = document.getElementById("button");
const resultElm = document.getElementById("result"); 
const submitElm = document.getElementById("submit");


// VARIABLES
let seconds = 30;
let randomNumbers = [];
let userNumbers = [];

for(let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);
    // console.log(randomNumbers);
}

// MAIN
const countdownID = setInterval(() => {
    if(seconds === 0) {
        clearInterval(countdownID);
        countdownElm.innerHTML = "Memorizzati?";
        showNumberElm.classList.add("d-none");
        rememberNumberElm.classList.remove("d-none");
        buttonElm.classList.remove("d-none");

    } else {
        countdownElm.innerHTML = seconds;
    }
    
    seconds--;
}, 1000);

showNumberElm.innerHTML = randomNumbers;

function result() {
    userNumbers = [
        Number(inputOneElm.value),
        Number(inputTwoElm.value),
        Number(inputThreeElm.value),
        Number(inputFourElm.value),
        Number(inputFiveElm.value),
    ];

    let correctNumbers = [];

    for (let i = 0; i < userNumbers.length; i++) {
        let numberschecked = userNumbers[i];
        if (randomNumbers.includes(numberschecked)) {
            correctNumbers.push(numberschecked)
        }
    }

    if (correctNumbers.length === 0) {
        resultElm.innerHTML = "Ritenta sarai più fortunato";
    } else {
        resultElm.innerHTML = `Hai indovinato i numeri: ${correctNumbers}`;
    }
}

document.getElementById("submit").addEventListener("click", result);
// buttonElm.classList.remove("d-none");
