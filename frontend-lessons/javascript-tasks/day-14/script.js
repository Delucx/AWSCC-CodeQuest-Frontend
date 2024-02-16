
// 1. Create a variable named `temperature` and assign it a value.
// 2. Use an `if` statement to check if the `temperature` is greater than 30. Print a message to the console accordingly.
// 3. Extend the previous example with an `else` statement to print a different message if the temperature is not greater than 30.
// 4. Create a variable named `time` and assign it a value representing the current hour (in 24-hour format).
// 5. Use `else if` statements to greet the user based on the time of day (morning, afternoon, evening).
// 6. Create a switch statement for the variable `day`. Print a message based on the day of the week.

let temperature = 35;
if (temperature > 30) {
    console.log('It is hot outside.');
}
else {
    console.log('It is not hot outside.');
}

let time = 13;
if (time < 12) {
    console.log('Good morning!');
}
else if (time < 18) {
    console.log('Good afternoon!');
}
else {
    console.log('Good evening!');
}

let day = 'Monday';
switch (day) {
    case 'Monday':
        console.log('It is Monday.');
        break;
    case 'Tuesday':
        console.log('It is Tuesday.');
        break;
    case 'Wednesday':
        console.log('It is Wednesday.');
        break;
    case 'Thursday':
        console.log('It is Thursday.');
        break;
    case 'Friday':
        console.log('It is Friday.');
        break;
    case 'Saturday':
        console.log('It is Saturday.');
        break;
    case 'Sunday':
        console.log('It is Sunday.');
        break;
    default:
        console.log('Invalid day.');
}