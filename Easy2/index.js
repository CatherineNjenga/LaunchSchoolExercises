function greetings(arr, obj) {
  // template literal and interpolation
  // Input: arr, object, output: return a string, explicit req: arr has 2 + elements, obj two keys,implicit req: 
  // data structure: string-template literal, algorithm return a string with the adjoined name and interpolated title and occupation
  return `Hello, ${arr.join(" ")}! Nice to have a ${obj.title} ${obj.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }),
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around

console.log(
  greetings(["Mandy", "Well"], { title: "Miss", occupation: "Manager" }),
);

function greetUser() {
  // control flow, if input includes "!", capitalize the returned string
  // Input: string, output: string, explicit req: tailor-made response dependent on the input,
  // data-structure: string, algorithm: ask for the user's name, if does not end with an exclamation mark respond with a capitalized string
  // if with an exclamation mark respond with uppercase
  let rlSync = require("readline-sync");
  let userName = rlSync.question("What is your name? ");
  if (userName.endsWith("!")) {
    console.log(`HELLO ${userName.toUpperCase()}. WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${userName}.`);
  }
}
// Examples
// What is your name? Bob
// Hello Bob.
// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

greetUser();

function multiply(num1, num2) {
  // Input: number, number, output: returns number, impicit req: return the resulting number of multiplying the two input values
  // data-structure: number, algorithm: multiply the two input numbers and return the reulting number
  let result = num1 * num2;
  return result; 
}

console.log(multiply(5, 3) === 15);

function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25);
console.log(square(-8) === 64);
console.log(square(100));

function integer() {
  // Input: number, number output: number(s), explicit req: addition, subtraction, product, remainder, and power
  // data-structure: number, algorithm: ask for the first number, ask for the second number, find the addition, 
  // subtraction, addition, substraction, product, quotient, remainder and power of the two numbers
  let rlSync = require("readline-sync");
  let firstInteger = Number(rlSync.question("Enter the first number: ")),
      secondInteger = Number(rlSync.question("Enter the second number: "));

  console.log(`${firstInteger} + ${secondInteger} = ${firstInteger + secondInteger}`);
  console.log(`${firstInteger} - ${secondInteger} = ${firstInteger - secondInteger}`);
  console.log(`${firstInteger} * ${secondInteger} = ${firstInteger * secondInteger}`);
  console.log(`${firstInteger} / ${secondInteger} = ${(firstInteger / secondInteger).toFixed()}`);
  console.log(`${firstInteger} % ${secondInteger} = ${firstInteger % secondInteger}`);
  console.log(`${firstInteger} ** ${secondInteger} = ${firstInteger ** secondInteger}`);
}

// Example
// Enter the first number:
// Enter the second number:
// 23 + 17 = 40
// 23 -17 = 6
// 23 * 17 = 391
// 23 / 17 = 1
// 23 % 17 = 6
// 23 ** 17 = 1.4...

integer();

// The end is near bu not here
function penultimate(str) {
  // Input: string, output: substring, explicit req: return second to last word
  // data-structure: array, algorithm: split the string to elements and save as an array of elements
  // select the second to last element and return it
  let arr = str.split(" ");
  let length = arr.length;
  let word = arr[length - 2];
  return word;
}

// Examples
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

// Exclusive or
function xor(el1, el2) {
  // Input: two separate elements of any primitive data type, output: boolean, implicit req: use the triple equal comparison for a boolean
  // value instead of a truthy/falsy values return, explicit req: return a boolean value
  // data structure: , algorithm: 
  if (el1 && el2) {
    return false;
  } else if (el1) {
    return true;
  } else if (el2) {
    return true;
  } else {
    return false
  }
}

// Examples
console.log(xor(5, 0) === true);  // true
console.log(xor(false, true) === true); // true
console.log(xor(2, 1) === false); // true
console.log(xor(true, true) === false); //true

function oddities(arr) {
  // Input: array, output: array, explicit req: returned array contains elements on the odd index position of original array
  // data structure-array, algorithm: loop through the original array, identify the elements in the odd-numbered index of the array
  // append/push the elements to a new array, return the new array
  return arr.map(element => {
    if (arr.indexOf(element) % 2 === 0) {
      return element;
    }
  }).filter(element => {
    return element !== undefined;
  })
}

// Examples
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6]));  // logs [1, 2, 3]
console.log(oddities(["abc", "def"]));  // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([]));  // logs []

function randomAge() {
  // Input: ,output: string, explicit req: a random number between 20 and 120(inclusive),
  // data structure, algorithm:
  let age = Math.random() * 121;
  if (age >= 20) {
    console.log(age);
  } else {
    age = Math.random() * 121; 
  }
   
}

randomAge();