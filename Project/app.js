// import confetti from 'https://cdn.skypack.dev/canvas-confetti';

// Declaration of remaining attempts
let attemptCount = document.getElementById("attempt")
let remaining = 3;
attemptCount.innerHTML = remaining
// input value 
let currentInput = document.getElementById("guess-input");
// reset button
// let reset
// return result value
const currentResult = document.getElementById('current-result');
// return history
const guessHistory = document.getElementById('guess-history');
// lucky Random Number
// let luckyNumber = Math.ceil(Math.random() * 100) ;
// console.log(luckyNumber);
// check button
const checkButton = document.getElementById('check-button');
// reset button
const resetButton = document.getElementById('reset-button')


let luckyNumber = Math.floor(Math.random() * 100) + 1;
console.log(luckyNumber);


window.onload = function () {
    
    checkButton.addEventListener('click', getInput);
    currentInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
       e.preventDefault();
       checkButton.click();
      }
    },getInput);


    resetButton.addEventListener('click', resetGame);
}


const getInput = () => {
    const createHistoryElement = document.createElement('div');
    createHistoryElement.innerHTML = "You guessed " + currentInput.value;
    guessHistory.append(createHistoryElement)

    console.log(currentInput.value);
    if (currentInput.value === '') {
        currentResult.innerHTML = `<div>Please Enter a valid number</div>`;
    } else if (currentInput.value > 100 || currentInput.value < 1) { 
        currentResult.innerHTML = '<div>Please Enter a number between 1 and 100</div>';
        currentInput.value = '';
       
    }  else {
        if (currentInput.value > luckyNumber) {
            currentResult.innerHTML = `<div>Your guess is HIGH!</div>`;
            currentInput.value = '';
            remaining--;
            console.log(remaining);
        } else if (currentInput.value < luckyNumber) {
            currentResult.innerHTML = `<div>Your guess is LOW!</div>`;
            currentInput.value = '';
        } else {
            currentResult.innerHTML = `<div>You have nailed it!</div>`;
            // I can froze the page and use some fireworks at this point 
        }
    }
    
};


const resetGame = ()  => {
    luckyNumber = Math.floor(Math.random() * 100) + 1 ;
    currentResult.innerHTML = '';
    guessHistory.innerHTML = '';
    currentInput.value = '';
     
}

// the page needs to be prevented to refresh the information when it is reloaded
