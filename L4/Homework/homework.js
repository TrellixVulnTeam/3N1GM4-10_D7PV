//In these first 6 questions, replace `null` with the answer.

//Create a string variable. It can contain anything
const newString = 'Charles'; 

//Create a number variable. It an be any number
const newNum = '10'; 

//Create a boolean variable.
const newBool = 'true';

//Solve the following math problem.
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will complete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names.

function returnString(str) {
  return str;
}

function add(x, y) {
  const sum = x + y;
  return sum;
}

function subtract(x, y) {
  const difference = x - y;
  return difference;
}

function multiply(x, y) {
  const product = x * y;
  return product
}

function divide(x, y) {
  const quotient = x / y;
  return quotient
}

function areEqual(x, y) {
  if (x = y) {
  return true;
  }
  
  return false;
}



function areSameLength(str1, str2) {
  if (str1 = str2) {
  return true;
  }
  
  return false;
}

function lessThanNinety(num) {
  if (90 < num) {
  return false;
  }
  
  return true;
}

function greaterThanFifty(num) {
  if (50 > num) {
  return false;
  }
  
  return true;
}

function getRemainder(x, y) {
  const quotient = x / b;
  return quotient;
}

function isEven(num) {
  if (value%num == 0)
  return true;
  else
  return false;
}

function isOdd(num) {
  if (value%num == 0)
  return false 
  else
  return false;
}

function square(num) {
  return num ** 2
}

function cube(num) {
  return num*num*num;
}

function raiseToPower(num, exponent) {
  let x = Math.pow(num, exponent);
}

function roundNumber(num) {
  let x = Math.round(num)
  return num
} 

function roundUp(num) {
  let x = Math.ceil(num)
  return num
}

function addExclamationPoint(str) {
  return str + '!';
}

function combineNames(firstName, lastName) {
  return this.firstName + this.lastName
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  let str1 = 'Hello';
  let str2 = 'Sam!';
}

// The next two questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  return 
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
