// Working with JSON in JavaScript - Day 19: Assignment

// Task 1: JavaScript to JSON

// 1. Create a JavaScript object named `product` with properties for `name`, `price`, and `quantity`.
// 2. Use the `JSON.stringify()` method to convert the `product` object into a JSON string.
// 3. Print the resulting JSON string to the console.

// Task 2: JSON to JavaScript

// 4. Create a JSON string representing a book with properties for `title`, `author`, and `publishedYear`.
// 5. Use the `JSON.parse()` method to convert the JSON string into a JavaScript object.
// 6. Access and print the `author` property of the resulting JavaScript object.

// Task 3: Advanced JSON Operations

// 7. Create an array of objects, each representing a person with properties for `name`, `age`, and `city`.
// 8. Use `JSON.stringify()` to convert the array of objects into a JSON string.
// 9. Use `JSON.parse()` to convert the JSON string back into an array of objects.
// 10. Print the `name` and `city` of each person in the array to the console.

console.log('Working with JSON in JavaScript - Day 19: Assignment');

console.log('Task 1: JavaScript to JSON');
let product = {
    name: 'Laptop',
    price: 10000,
    quantity: 3
};
console.log(product);

let productJSON = JSON.stringify(product);
console.log(productJSON);

console.log('Task 2: JSON to JavaScript');
let bookJSON = '{"title":"The Catcher in the Rye","author":"J.D. Salinger","publishedYear":1954}';
console.log(bookJSON);

let book = JSON.parse(bookJSON);
console.log(book);
console.log(book.author);

console.log('Task 3: Advanced JSON Operations');
let people = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'Los Angeles' },
    { name: 'Charlie', age: 35, city: 'Chicago' }
];

let peopleJSON = JSON.stringify(people);
console.log(peopleJSON);

let peopleArray = JSON.parse(peopleJSON);
for (let i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name + ' - ' + peopleArray[i].city);
}