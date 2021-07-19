// import confetti from 'https://cdn.skypack.dev/canvas-confetti';

// Declaration of remaining attempts
const attemptCount = document.getElementById("attempt")
let remaining = 5;
attemptCount.innerHTML = remaining

decrementAttempt = () => {
    remaining--;
    attemptCount.innerHTML = remaining
} 
clearInput = () => {
    currentInput.value = '';
}

// input value 
const currentInput = document.getElementById("guess-input");
// return result value
const currentResult = document.getElementById('current-result');
// return history
const guessHistory = document.getElementById('guess-history');
// lucky Random Number
let luckyNumber = Math.ceil(Math.random() * 100);
console.log(luckyNumber);
// check button
const checkButton = document.getElementById('check-button');
// reset button
const resetButton = document.getElementById('reset-button')


window.onload = function () {
    checkButton.addEventListener('click', getInput);
    currentInput.addEventListener("keyup", (e) => {
      if (e.code === 'Enter') {
       e.preventDefault();
       checkButton.click();
      }
    },getInput);

    resetButton.addEventListener('click', resetGame);
}


const getInput = () => {
    function addHistory () {
        if (currentInput == '' || currentInput.value > 100 ||          currentInput.value < 1 ) {
            createHistoryElement.innerHTML  = null
        } else {
            const createHistoryElement = document.createElement('div');
            createHistoryElement.innerText = "You guessed " + currentInput.value;
            createHistoryElement.classList.add('history-div')
            guessHistory.append(createHistoryElement)

            console.log(currentInput.value);
        }
    }
    if (currentInput.value === '') {
        currentResult.innerHTML = `<div class='warning'>Please Enter a valid number</div>`;

    } else if (currentInput.value > 100 || currentInput.value < 1) { 
        currentResult.innerHTML = `<div class='warning'>Please Enter a number between 1 and 100</div>`;
        clearInput()

    }  else {
        if (currentInput.value > luckyNumber) {
            currentResult.innerHTML = `<div>Your guess is HIGH!</div>`;
            addHistory();
            decrementAttempt();
            clearInput()
            if (remaining == 0) location.reload()
       
        } else if (currentInput.value < luckyNumber) {
            currentResult.innerHTML = `<div>Your guess is LOW!</div>`;
            addHistory();
            decrementAttempt();
            clearInput()
            if (remaining == 0) location.reload()
          
        } else {
            currentResult.innerHTML = `<div>You have nailed it!</div>`;
            addHistory();
            setTimeout(location.reload.bind(location), 2000);
            
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

