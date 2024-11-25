// Object Literal -

//! Refer thsese topics :-
// Abstarction
//  Encapuslation
//  Inheritance
//  Plymorphism

// creating the object literal
const user = {
  userName: "Harsh",
  loginCount: "45",
  isSignedIn: true,
  getUserDetails: function () {
    console.log("Got user details :", this.userName);
    console.log(this);
    return true;
  },
};
// console.log(user);
// console.log(user.getUserDetails);
// console.log(user.getUserDetails());    // object
console.log(typeof this); //object
console.log(this); // window object

//  CONSTRUCTOR FUNCTION - allow to make multiple instances wth one object (u can amke similar objects templates and properties)
function User(userName, loginCount, isLoggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greetings = function () {
    console.log(`Welcome ${this.userName}`);
  };
  return this;
}
// ? when we dont use this keyword and user gets overWrite
// const userOne =  User("harsh", 12, true);
// const userTwo =  User("hitesh", 43, false);
// console.log(userOne);
// console.log(userTwo);

// when we use new object ==> a new obejct created==> a constructor function is called cz of new keyword and returns all args ==> all args injected using this keyword ==> returns the new made object
const userOne = new User("harsh", 12, true);
const userTwo = new User("hitesh", 43, false);
// console.log(userOne);
// console.log(userTwo);

// console.log(userOne.constructor);
// console.log(userOne.constructor());
//! Refer thsese topics :- instancesOf
