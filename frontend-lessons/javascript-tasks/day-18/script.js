// Working with Objects in JavaScript - Day 18: Assignment

// Task 1: Object Basics

// 1. Create an empty object named `book`.
// 2. Add properties to the `book` object for `title`, `author`, and `year` with appropriate values.
// 3. Access and print the `author` property of the `book` object.

// Task 2: Object Operations

// 4. Create an object named `student` with properties for `name`, `age`, and `grade`.
// 5. Modify the `age` property of the `student` object to a different value.
// 6. Add a new property named `subjects` to the `student` object, which should be an array of at least three subjects.

// Task 3: Object Methods

// 7. Create an object named `rectangle` with properties for `width` and `height`.
// 8. Add a method named `calculateArea` to the `rectangle` object that returns the area of the rectangle.
// 9. Invoke the `calculateArea` method and store the result in a variable, then print it to the console.

// Task 4: Advanced Object Techniques

// 10. Create an object named `person` with properties for `name`, `age`, and `address`.
// 11. Use the `delete` keyword to remove the `address` property from the `person` object.
// 12. Create another object named `employee` with properties for `name` and `position`. Combine the `person` and `employee` objects into a new object named `employeeDetails`.

// These tasks will enhance your understanding of working with objects in JavaScript. Objects are versatile and allow you to structure data in a meaningful way. Best of luck! 🌟

console.log('Working with Objects in JavaScript - Day 18: Assignment');

console.log('Task 1: Object Basics');
let book = {};
book.title = 'Self-Reliance';
book.author = 'Raulph Waldo Emerson';
book.year = 1841;
console.log(book.author);

console.log('Task 2: Object Operations');
let student = {
    name: 'John Doe',
    age: 20,
    grade: 'A'
};
console.log(student);

student.age = 22;
console.log(student);

student.subjects = ['Math', 'Science', 'History'];
console.log(student.subjects);

console.log('Task 3: Object Methods');
let rectangle = {
    width: 10,
    height: 20,
    calculateArea: function() {
        return this.width * this.height;
    }
};
let area = rectangle.calculateArea();
console.log(area);

console.log('Task 4: Advanced Object Techniques');
let person = {
    name: 'Alice',
    age: 25,
    address: '123 Main St'
};
console.log(person);

delete person.address;
console.log(person);

let employee = {
    name: 'Bob',
    position: 'Manager'
};
let employeeDetails = Object.assign(person, employee);
console.log(employeeDetails);