// Do not change any of the function names

function createUserClass() {
  function User(email, name){
    this.email = email;
    this.name = name;
    this.sayHi = function(){
      return 'Hello my name is ' + this.name + 'sayHi';
    
    };
}
var userOne = new User('francis@avionschool.com', 'Francis');
var userTwo = new User('iamFPlaza', 'AS Rocks!');
  // create an ES6 class or a constructor function called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the class
}

function addPrototypeMethod(Constructor) {
  User.prototype.introduction = function(){
    return 'Hello World ' + this.sayHi ;
};
  
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
}

function addReverseString() {
  User.prototype.reverse = function(){}
    return 'olleH ' + this.sayHi ;
  
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};