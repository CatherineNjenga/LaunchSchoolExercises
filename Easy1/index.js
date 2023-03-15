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
  let rlSync = require("");
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

function sumOrProduct() {
  // Input: number, output: number, explicit req: number greater than 0, sum/product of all numbers between 1 and the number exclusive
  // implicit req: , data structure: number, algorithm: ask for a number above 0, ask if to get the sum/product result
  // of the numbers between including the limit, log to the console the sum/product
  let rlSync = require("readline-sync");
  let limit = Number(rlSync.question("Please enter an integer greater than 0: "));
  let operation = rlSync.question("Enter 's' to compute the sum, or 'p' to compute the product. ");
  let sum = 0, product = 1;
  if (operation === "s") {
    for (let i = 1; i <= limit; i += 1) {
      sum += i;
    }
    console.log(`The sum of the integers between 1 and ${limit} is ${sum}`);
  } else if (operation === "p") {
    for (let i = 1; i <= limit; i += 1) {
      product *= i;
    }
    console.log(`The product of the integers between 1 and ${limit} is ${product}`);
  }
}

sumOrProduct();

function shortLongShort(strA, strB) {
  // Input: string A, string B, output: returns string, explicit req: strings are of different lengths,
  // data structure: strings, algorithm: determine the lengths of the input strings, if the shorter string, start with it
  // then concatenate the longer string, then the shorter string, return resulting the string
  let lengthA = strA.length;
  let lengthB = strB.length;
  if (lengthA < lengthB) {
    return `${strA}${strB}${strA}`;
  } else {
    return `${strB}${strA}${strB}`;
  }
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));

function isLeapYear(year) {
  // Input: number, output: boolean, explicit req: year greater than 0, implicit req: data structure:
  // algorithm: determine if year is evenly divisible by 4, if divisible by 4 and divisible by 100 not a leap year
  // if divisible by 100 not a leap year, if divisible by 100 and divisible by 400 it is a leap year
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }  
    } else {
      return true;
    }
  } else {
    return false;
  }
}

// console.log(isLeapYear(2016));
// console.log(isLeapYear(2015));
// console.log(isLeapYear(2100));
// console.log(isLeapYear(2400));
// console.log(isLeapYear(240000));
// console.log(isLeapYear(240001));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(1900));
// console.log(isLeapYear(1752));
// console.log(isLeapYear(1700));
// console.log(isLeapYear(1));
// console.log(isLeapYear(100));
// console.log(isLeapYear(400));

function isLeapYearII(year) {
  if (year <= 1752) {
    if (year % 4 === 0) {
      return true
    } else {
      return false;
    }
  } else {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }  
      } else {
        return true;
      }
    } else {
      return false;
    }
  }  
}

console.log(isLeapYearII(2016));
console.log(isLeapYearII(2015));
console.log(isLeapYearII(2100));
console.log(isLeapYearII(2400));
console.log(isLeapYearII(240000));
console.log(isLeapYearII(240001));
console.log(isLeapYearII(2000));
console.log(isLeapYearII(1900));
console.log(isLeapYearII(1752));
console.log(isLeapYearII(1700));
console.log(isLeapYearII(1));
console.log(isLeapYearII(100));
console.log(isLeapYearII(400));

function multisum(num) {
  // Input: number, output: return/console? number, explicit req: sum of numbers/multiples of 3 or 5 between 1 and the input number inclusive
  // implicit req: the input number is the limit, there are no multiples/sum only unique numbers
  // data structure: array, algorithm: with an array to store our numbers, loop through the numbers from 1 to the limit of the inputted number
  // check if the number is a multiple of 3 or 5, check if already in the array
  // if not add it, sum up the numbers and return the resulting number

  let arr = [], sum = 0;

  for (let i = 1; i <= num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      if (!arr.includes(i)) {
        sum += i;
        arr.push(i);  
      }  
    }
  }
  return sum;
}

console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10));  // 33
console.log(multisum(1000));  // 234168

function utf16Value(str) {
  // Input: string, output: number, explicit req: sum of the UTF-16 values of each char, 
  // implicit req: what do we do about the whitespaces/ whitespaces don't have value in JS
  // data-structure-array, algorithm
  // loop through the char in the string, determine the utf-16 of the char, add to a variable sum, return the end value of sum
  let sum = 0;

  for (let i = 0; i < str.length; i += 1) {
    let chrUtfValue = str.charCodeAt(i);
    sum += chrUtfValue;
  }

  return sum;
}

console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));
console.log(utf16Value(' '));