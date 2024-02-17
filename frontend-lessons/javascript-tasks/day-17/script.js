// Working with Arrays in JavaScript - Day 17: Assignment

// Task 1: Array Basics

// 1. Create an array named `cities` containing the names of five cities.
// 2. Access and print the third city in the `cities` array.
// 3. Modify the second city in the array to a different city of your choice.

// Task 2: Array Operations

// 4. Create an array named `fruits` with at least three different fruits.
// 5. Add a new fruit to the end of the `fruits` array using the `push()` method.
// 6. Remove the last fruit from the array using the `pop()` method.
// 7. Use a loop to iterate through the `fruits` array and print each fruit to the console.

// Task 3: Advanced Array Techniques

// 8. Create an array named `numbers` with five numeric values.
// 9. Use the `map()` method to create a new array where each number is multiplied by 2.
// 10. Use the `filter()` method to create a new array containing only the numbers greater than 5 from the original `numbers` array.

// Task 4: Array Manipulation

// 11. Create an array named `colors` with at least four different colors.
// 12. Add a new color to the beginning of the `colors` array using the `unshift()` method.
// 13. Remove the first color from the array using the `shift()` method.
// 14. Use the `slice()` method to create a new array containing the second and third colors from the original array.

// Task 5: Array Splicing

// 15. Create an array named `characters` with at least six characters (strings).
// 16. Use the `splice()` method to insert two new characters at index 2 of the `characters` array.
// 17. Use the `splice()` method to remove three characters starting from index 4 of the `characters` array.

// These tasks will help you strengthen your understanding of working with arrays in JavaScript. Arrays are powerful tools for managing and manipulating collections of data. Good luck! 🚀

console.log('Working with Arrays in JavaScript - Day 17: Assignment');

console.log('Task 1: Array Basics');
let cities = ['New York', 'Los Angeles', 'Chicago', 'Manila', 'San Francisco'];
console.log(cities[2]);
cities[1] = 'Tokyo';
console.log(cities[1]);

console.log('Task 2: Array Operations');
let fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.push('grape');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.pop();
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log('Task 3: Advanced Array Techniques');
let numbers = [10, 20, 30, 40, 50];
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

let greaterThanFive = numbers.filter(number => number > 5);
console.log(greaterThanFive);

console.log('Task 4: Array Manipulation');
let colors = ['red', 'blue', 'green', 'yellow'];
console.log(colors);

colors.unshift('purple');
console.log(colors);

colors.shift();
console.log(colors);

let newColors = colors.slice(1, 3);
console.log(newColors);

console.log('Task 5: Array Splicing');
let characters = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(characters);

characters.splice(2, 0, 'g', 'h');
console.log(characters);

characters.splice(4, 3);
console.log(characters);