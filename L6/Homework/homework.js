// Do not change any of the function names

function returnFirst(arr) {
  const returnFirst = [10, 10, 16, 12];
  returnFirst.shift(10);
  const returnFirst = [97, 100, 80, 55, 72, 94];
  returnFirst.shift(97);
}

function returnLast(arr) {
 const returnLast =[10, 10, 16, 12];
 returnLast.pop(12);
 const returnLast =[97, 100, 80, 55, 72, 94];
 returnLast.pop(94);
 const returnLast =['hi', 'there', 'how', 'are', 'you', 'doing?'];
 returnLast.pop('doing');
}

function getArrayLength(arr) {
  const getArrayLength = [10, 10, 16, 12]
  console.log(getArrayLength.length);
  const getArrayLength = [97, 100, 80, 55, 72, 94];
  console.log(getArrayLength.length);
  const getArrayLength = ['hi', 'there', 'how', 'are', 'you', 'doing?'];
  console.log(getArrayLength.length);
}

function incrementByOne(arr) {
  for (var i = 0; i < arr; i++)
    return (arr[i]);
}

function addItemToArray(arr, item) {
  const addItemToArray = [10, 10, 16, 12];
  addItemToArray.push(10);
  const addItemToArray = [97, 100, 80, 55, 72, 94];
  addItemToArray.push('Hello');
  const addItemToArray =[]
  addItemToArray.push(true);
}

function addItemToFront(arr, item) {
  const addItemToFront =[10, 10, 16, 12];
  addItemToFront.unshift(10);
  const addItemToFront =[97, 100, 80, 55, 72, 94];
  addItemToFront.unshift('Hello');
  const addItemToFront =[];
  addItemToFront.unshift(true);
}

function wordsToSentence(words) {
  function wordsToSentence(words) 
    var sentence = ""; 
    for (var i = 0; i < words.length; i++) {
       sentence += 'AvionSchool' , 'Javascript' , 'Class' + words[i]; 
    }
    return sentence.trim(); 
}

function contains(arr, item) {
  array.includes()
  return true
}

function addNumbers(numbers) {
  const sum = [10, 10, 16].reduce(add, 0); 
  function add(accumulator, a) 
  return accumulator + a;
}
const sum = [97, 100].reduce(add, 0);{ 
function add(accumulator, a) 
return accumulator + a;
}

function averageTestScore(testScores) {
  var sum = 0;
for( var i = 0; i < elmt.length; i++ ){
    sum += parseInt( elmt[i], 10 );
}

var avg = sum/elmt.length;
}

function largestNumber(numbers) {
  var array = [10, 10, 16, 12];
  var largest= 16;
for (i=0; i<=largest;i++)
    if (array>largest) 
        var largest=array[i];
        
        var array = [97, 100, 80, 55, 72, 94];
        var largest= 100;
         for (i=0; i<=largest;i++)
            if (array>largest)
                var largest=array[i];
                
                var array = [97, 10000, 80, 55, 7.2, -94];
                var largest= 0;
                
                for (i=0; i<=largest;i++)
                    if (array>largest) 
                        var largest=array[i];         
                    }

function multiplyArguments() {
  var multiply = function () {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) 
        sum *= arguments[i];
    }
    return sum;
}
// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};