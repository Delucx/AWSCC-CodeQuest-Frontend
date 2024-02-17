//Task 1
// JavaScript Code
const dynamicContainer = document.getElementById('dynamicContainer');

// Create a new img element
const newImage = document.createElement('img');

// Set attributes
newImage.src = 'https://picsum.photos/seed/picsum/200/300';
newImage.alt = 'Dynamically created image';

// Append the new element to the container
dynamicContainer.appendChild(newImage);

//Task 2
// JavaScript Code
const myList = document.getElementById('myList');

// a. Select and remove a specific list item
const itemToRemove = myList.children[1]; // Selecting the second item
myList.removeChild(itemToRemove);

// b. Remove the last list item
const lastItem = myList.lastElementChild;
lastItem.remove();

// c. Clear all list items using innerHTML
myList.innerHTML = '';