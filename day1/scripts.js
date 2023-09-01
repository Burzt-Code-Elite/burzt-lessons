// Variables - let and const
let age = 25;
const name = "John";

// Data Types - Numbers, Strings, Arrays, Objects, Undefined, and Null
let num = 42;
let message = "Hello, world!";
let colors = ["red", "green", "blue"];
let person = { name: "Alice", age: 30 };
let undefinedVar;
let emptyValue = null;

// Interaction - alert and prompt
alert("This is an alert!");
let userName = prompt("Please enter your name:");
alert(`Hello, ${userName}!`);

// Basic Operators and Math Functions
let x = 10;
let y = 5;
let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let remainder = x % y;
let minNumber = Math.min(x, y);
let maxNumber = Math.max(x, y);
let squared = Math.pow(x, 2);

// Comparison and Conditional Statements
let a = 10;
let b = 15;
if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("b is greater than a");
} else {
  console.log("a and b are equal");
}
let result = (a > b) ? "a is greater" : "b is greater";
console.log(result);

// Logical Operators
let hasPermission = true;
let isLoggedIn = false;
if (hasPermission && isLoggedIn) {
  console.log("You can access the content.");
} else {
  console.log("Access denied.");
}

// Loops - for Loop
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration ${i}`);
}

// While loop
let itr = 1;
while(itr<=5){
  console.log(`Iteration ${itr}`);
  itr++
}


// Functions
const greet = (name) => {
  console.log(`Hello, ${name}!`);
}
let sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};
greet("Alice");
sayHello("Bob");

// Callback Functions
const doSomething = (callback) =>{
  console.log("Doing something...");
  callback();
}
const afterDone = () => {
  console.log("After done!");
}
doSomething(afterDone);

// Array Methods
let numbers = [1, 2, 3, 4, 5];

// Push and Pop
numbers.push(6);
let poppedNumber = numbers.pop();

// Shift and Unshift
numbers.unshift(0);
let shiftedNumber = numbers.shift();

// Filter
let evenNumbers = numbers.filter(num => num % 2 === 0);

// Find
let foundNumber = numbers.find(num => num > 3);

// Map
let squaredNumbers = numbers.map(num => num * num);

// Reduce
let sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);

console.log("Array methods examples:");
console.log("Pushed number:", numbers);
console.log("Popped number:", poppedNumber);
console.log("Shifted number:", shiftedNumber);
console.log("Even numbers:", evenNumbers);
console.log("Found number:", foundNumber);
console.log("Squared numbers:", squaredNumbers);
console.log("Sum of numbers:", sumOfNumbers);

// String Methods
let text = "Hello, world!";
let charAtIndex = text.charAt(7);
let charCodeAtIndex = text.charCodeAt(7);
let textParts = text.split(", ");

console.log("String methods examples:");
console.log("Character at index 7:", charAtIndex);
console.log("Character code at index 7:", charCodeAtIndex);
console.log("Text parts:", textParts);