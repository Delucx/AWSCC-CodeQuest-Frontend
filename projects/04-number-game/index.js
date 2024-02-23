const guessNumber = document.getElementById('guessNumber');
const message = document.getElementById('message');
const checkNumber = document.getElementById('checkNumber');
const reset = document.getElementById('resetGame');

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
        } else if (number > randomNumber) {
            message.textContent = 'Too high! Try again!';
        } else {
            message.textContent = 'Too low! Try again!';
        }

    }
});

reset.addEventListener('click', function () {
    if (reset) {
        let random = generateRandomNumber();
        randomNumber = random;
        console.log(randomNumber);
        guessNumber.value = '';
        message.textContent = '';
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