const guessNumber = document.getElementById('guessNumber');
const message = document.getElementById('message');
const checkNumber = document.getElementById('checkNumber');
const tryAgain = document.getElementById('tryAgain');
const reset = document.getElementById('resetGame');
const guessedNumber = document.getElementById('guessedNumber');
const guessesCount = document.getElementById('guessesCount');
guessedNumber.textContent = 0;
guessesCount.textContent = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

checkNumber.addEventListener('click', function () {
    if (guessNumber < 1 || guessNumber > 100 || guessNumber === '') {
        message.textContent = 'Please enter a valid number between 1 and 100.';
    } else if (guessNumber) {
        const number = parseInt(guessNumber.value);
        if (number === randomNumber) {
            message.textContent = 'Congratulations! You guessed the number!';
            message.style.color = 'green';
            checkNumber.disabled = true;
            guessNumber.disabled = true;
            guessedNumber.textContent = parseInt(guessedNumber.textContent) + 1;
        } else if (number > randomNumber) {
            message.textContent = 'Too high! Try again!';
            message.style.color = 'red';
            guessesCount.textContent = parseInt(guessesCount.textContent) + 1;
        } else {
            message.textContent = 'Too low! Try again!';
            message.style.color = 'red';
            guessesCount.textContent = parseInt(guessesCount.textContent) + 1;
        }

    }
});



tryAgain.addEventListener('click', function () {
    if (tryAgain) {
        let random = generateRandomNumber();
        randomNumber = random;
        console.log(randomNumber);
        guessNumber.value = '';
        message.textContent = '';
        checkNumber.disabled = false;
        guessNumber.disabled = false;
    }
});

reset.addEventListener('click', function () {
    if (reset) {
        let random = generateRandomNumber();
        randomNumber = random;
        console.log(randomNumber);
        guessNumber.value = '';
        message.textContent = '';
        guessesCount.textContent = 0;
        guessedNumber.textContent = 0;
        checkNumber.disabled = false;
        guessNumber.disabled = false;
    }
});

// function checkNumber() {
//   const number = parseInt(guessNumber.value);
//   if (number === randomNumber) {
//     message.textContent = 'Congratulations! You guessed the number!';
//   } else if (number > randomNumber) {
//     message.textContent = 'Too high! Try again!';
//   } else {
//     message.textContent = 'Too low! Try again!';
//   }
// }