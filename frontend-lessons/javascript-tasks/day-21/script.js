console.log('Working with the DOM in JavaScript - Day 21: Assignment');

// Task 1: Adding Attributes
// JavaScript Code
const myLink = document.getElementById('myLink');
myLink.setAttribute('target', '_blank');
console.log(myLink);

// Task 2: Adding Class Using `classList`
// JavaScript Code
const myDiv = document.getElementById('myDiv');
myDiv.classList.add('highlight');
console.log(myDiv);

// Task 3: Removing Class Using `classList`
// JavaScript Code
const myDiv2 = document.getElementById('myDiv2');
myDiv2.classList.remove('highlight');
console.log(myDiv2);

// Task 4: Toggling Class Using `classList`
// JavaScript Code
const myParagraph = document.getElementById('myParagraph');
myParagraph.textContent = 'This paragraph has new text content.';
console.log(myParagraph);

// Task 5: Checking Class Using `contains`
// JavaScript Code
myParagraph.style.color = 'red';
myParagraph.style.backgroundColor = 'lightgray';
myParagraph.style.fontSize = '18px';
