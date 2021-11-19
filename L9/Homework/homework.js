// Do not change any of the function names

function invokeCallback(cb) {
  return cb = jest.fn;
  // invoke cb
}

function sumArray(numbers, cb) {
  const nums = [1, 2, 3, 4, 5];
     const sums = nums.reduce(function(acc, item){

     });
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
}

function forEach(arr, cb) {
  const nums = [1, 2, 3, 4, 5];
     nums.forEach(function(item, index){
      console.log(item);
  });
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
}

function map(arr, cb) {
  const num = [1, 2, 3, 4, 5];
    function squares (item) {
      return num * item;
    }
   
    const squares = nums.map(function(item) {
      return item * num;
    });

    console.log(squares);

  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
}

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};