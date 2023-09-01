// Callback Functions
const doSomething = (callback) =>{
  console.log("Doing something...");
  callback();
}
const afterDone = () => {
  console.log("After done!");
}
doSomething(afterDone);

// Early return
const fun = ()=>{
    console.log("Before return")
    return 1
    console.log("After return")
}

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

// Formatted string
const username = "Alice"
console.log(`Hello ${username}`)

// Object methods

const object = {
    name: "Sudip",
    age: 21,
    city: "Chennai",
    isProgrammer: true
}

const keys = Object.keys(object)
const values = Object.values(object)
const entries = Object.entries(object)

console.log(keys)
console.log(values)
console.log(entries)

// Destructuring Objects

const {age, city} = object
console.log(age, city)
// Destructuring arrays

const demoArr = [5, 10]
const [num1, num2] = demoArr
console.log(num1, num2)

// References
const arr1 = [1,2,3]
const arr2 = arr1

arr2[0] = 0
console.log(arr1)

const obj1 = {
    k: 1
}

const obj2 = obj1
obj2.k = 2

console.log(obj2)

// Typeof operator

console.log(typeof(2))
console.log(typeof(true))
console.log(typeof('s'))
console.log(typeof([1,2,3]))
console.log(typeof({k:1}))

// Circular objects

const person1 = {
    name: "Alice"
}

const person2 = {
    name: "Bob"
}

person1.friend = person2
console.log(person1)
person2.friend = person1
console.log(person1)
