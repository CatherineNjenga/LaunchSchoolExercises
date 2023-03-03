function isOdd(num) {
  // Input: number, output: boolean true if the input number absolute value is odd, explicit req: arg a valid number,
  // implicit req: return false otherwise, data structure: number, algorithm: find the absolute value of the input number, check if odd, return true
  // otherwise return false, examples
  let absValue = Math.abs(num);
  if (absValue % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(2)); // false
console.log(isOdd(5));  // true
console.log(isOdd(-17));  // true
console.log(isOdd(-8)); // false
console.log(isOdd(0));  // false
console.log(isOdd(7));  // true

function logOddNum() {
  // Input:, output: console log odd numbers 1 to 99 inclusive, each number on a separate line
  // data structure: numbers, algorithm: log to the console, odd numbers from 1 to 99 inclusive, loop through 1 to 99, 
  // if number is odd log to the console
  for (let i = 1; i < 100; i += 1) {
    if (i % 2 !== 0) {
      console.log(i);
    }  
  }
}

logOddNum();

function logEvenNum() {
  // Input, output: numbers, data structure: numbers, algorithm: for numbers 1 to 99 inclusive, if number is even log to console
  for (let i = 1; i < 100; i += 1) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

logEvenNum();

function findArea() {
  // Input: number-len, number-wid, output: number-square meters, number-square feet, data structure: number,
  // explicit req: len and wid in meters, implicit req: 
  // algorithm: ask for length, ask for width, multiply the two to get area in square meters, convert to square feet
  // log to console
  let rlSync = require("readline-sync");
  let length = rlSync.question("Enter the length of the room in meters: ");
  let width = rlSync.question("Enter the width of the room in meters: ");
  let sqrMeter = (length * width).toFixed(2);
  let sqrFeet = (sqrMeter * 10.7639).toFixed(2);
  console.log(`The area of the room is ${sqrMeter} square meters (${sqrFeet} square feet).`);
}

findArea();

function tipCalc() {
  // Input: number-bill amount, number-tip rate, output: number-tip, number-total bill, implicit req: total bill is bill, tip inclusive
  // explicit req:, data structure: number, algorithm: ask tip rate, ask total bill, calculate the tip amount, add to the biil to find the total
  let rlSync = require("readline-sync");
  let billAmount = Number(rlSync.question("What is the bill? "));
  let tipRate = Number(rlSync.question("What is the tip percentage? "));

  let tipAmount = Number((billAmount * (tipRate / 100)).toFixed(2));
  let totalAmount = (billAmount + tipAmount).toFixed(2);

  console.log(`The tip is $${tipAmount}\nThe total is $${totalAmount}`);
}

tipCalc();