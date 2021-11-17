// Do not change any of the function names

function makeCat(name, age)
  var cat = {};
  cat.name = name;
  cat.age = age;
  cat.meow = function (){
    return 'Meow!';
  }

function addProperty(object, property) {
  var obj = {x:1,y:null};
// undefined
obj
// {x: 1, y: null}
addProperty(obj, 'z');
// {x: 1, y: null, z: null}
}

function invokeMethod(object, method) {
  // object definitions
  const obj = {
    name: 'Snowball',
    cat: function(){
      console.log('cat');
    }
  };

  // conditional invokation 
  switch(object){
    case "obj":
      if(typeof obj[method] == "function") return obj[method]();
    default:
      console.log("Given object not found!");
    }  
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  return mysteryNumberObject.mysteryNumber * 5;
}

function deleteProperty(object, property) {
  delete object[property];
  return object;
}

function newUser(name, email, password) {
  var newObj = {
    name: name,
    email: email,
    password: password
  };
  return newObj;
}

function hasEmail(user) {
  if (user.email) {
    return true;
  } else {
    return false;
  }
}

function hasProperty(object, property) {
  if (object[property]) {
    return true;
  } else {
    return false;
  }
}

function verifyPassword(user, password) {
  return (user.password === password);
}

function updatePassword(user, newPassword) {
  user.password = newPassword; return user;
}

function addFriend(user, newFriend) {
  user.friends.push(newFriend); return user;
}

function setUsersToPremium(users) {
  for (var i = 0; i < users.length; i++) {
    users[i].isPremium = true;
  }
  return users;
}

function sumUserPostLikes(user) {
  var counterr = 0;
  for (var i = 0; i < user.posts.length; i ++) {
    counterr += user.posts[i].likes;
  }
  return counterr;
}

function addCalculateDiscountPriceMethod(storeItem) {
  storeItem.calculateDiscountPrice = function () {
    var discount = storeItem.price * storeItem.discountPercentage;
    var discountPrice = storeItem.price - discount;
    return discountPrice;
  };
  return storeItem;
}

module.exports = {
  makeCat,
  addProperty,
  invokeMethod,
  multiplyMysteryNumberByFive,
  deleteProperty,
  newUser,
  hasEmail,
  hasProperty,
  verifyPassword,
  updatePassword,
  addFriend,
  setUsersToPremium,
  sumUserPostLikes,
  addCalculateDiscountPriceMethod,
};