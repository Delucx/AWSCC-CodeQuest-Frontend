// JavaScript Fundamentals - Day 20: Assignment

// Task 1: Selecting Elements

// 1. Create an HTML document with various elements, including headings, paragraphs, and divs.
// 2. Use JavaScript to select and log the following elements to the console:

//    a. All paragraphs on the page using `getElementsByTagName`.
   
//    b. All elements with the class "info" using `getElementsByClassName`.
   
//    c. The element with the ID "header" using `getElementById`.
   
//    d. The first element with the class "highlight" using `querySelector`.

// Task 2: Modifying Elements

// 3. Change the text content of the second paragraph to "This paragraph is now updated!".
// 4. Change the background color of the div with the ID "header" to a different color of your choice.

// Task 3: Creating and Appending Elements

// 5. Create a new `h3` element with the text "New Section" using `document.createElement`.
// 6. Append the newly created `h3` element to the end of the body of the HTML document.

// Task 4: Removing Elements

// 7. Remove the first paragraph from the document.

// Task 5: Handling Events

// 8. Add a click event listener to the div with the ID "header" that logs "Header clicked!" to the console when clicked.

// Task 6: Advanced Element Manipulation

// 9. Create an array of colors.
// 10. Use a loop to iterate over all paragraphs and assign a different background color from the array to each paragraph.

// *These tasks will help you practice selecting, modifying, creating, and removing elements from the DOM using JavaScript. Good luck! 🌐*

console.log('Working with the DOM in JavaScript - Day 20: Assignment');

console.log('Task 1: Selecting Elements');
let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

let infoElements = document.getElementsByClassName('info');
console.log(infoElements);

let headerElement = document.getElementById('header');
console.log(headerElement);

let highlightElement = document.querySelector('.highlight');
console.log(highlightElement);

console.log('Task 2: Modifying Elements');
let secondParagraph = paragraphs[1];
secondParagraph.textContent = 'This paragraph is now updated!';
console.log(secondParagraph);

let headerDiv = document.getElementById('header');
headerDiv.style.backgroundColor = 'blue';
console.log(headerDiv);

console.log('Task 3: Creating and Appending Elements');
let newH3 = document.createElement('h3');
newH3.textContent = 'New Section';
document.body.appendChild(newH3);
console.log(newH3);

console.log('Task 4: Removing Elements');
let firstParagraph = paragraphs[0];
firstParagraph.remove();
console.log(firstParagraph);

console.log('Task 5: Handling Events');
let headerDiv2 = document.getElementById('header');
headerDiv2.addEventListener('click', function() {
    console.log('Header clicked!');
});

console.log('Task 6: Advanced Element Manipulation');
let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundColor = colors[i];
}
console.log(paragraphs);