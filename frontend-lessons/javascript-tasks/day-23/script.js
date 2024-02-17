// JavaScript Code
const button = document.getElementById('myButton');

// Attach a click event listener
button.addEventListener('click', function (event) {
    // Your code to handle the button click goes here
    alert('Button clicked!');
});

// JavaScript Code
const doubleClickButton = document.getElementById('doubleClickButton');

// Attach a double-click event listener
doubleClickButton.addEventListener('dblclick', function (event) {
    // Your code to handle the button double-click goes here
    alert('Button double-clicked!');
});

// JavaScript Code
const mouseenterButton = document.getElementById('mouseenterButton');

// Attach a mouseenter event listener

mouseenterButton.addEventListener('mouseenter', function (event) {
    // Your code to handle the mouseenter event goes here
    mouseenterButton.style.backgroundColor = 'lightgreen';
});

// JavaScript Code
const inputElement = document.getElementById('myInput');

// Attach a keypress event listener
inputElement.addEventListener('keypress', function(event) {
    // Your code to handle the keypress event goes here
    console.log('Keypress event:', event.key);
});