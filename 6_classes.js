// // ES6

// class User {
//   constructor(userName, email, password) {
//     this.username = userName;
//     this.email = email;
//     this.pass = password;
//   }

//   encryptPassword() {
//     return `${this.pass}abc`;
//   }

//   changeUserName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("chaikjfls", "hskdfo@mail.vom", "2352");

// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

//  BEHIND THE SCENE

function user(userName, email, password) {
  this.username = userName;
  this.email = email;
  this.pass = password;
}

user.prototype.encryptPassword = function () {
  return `${this.pass}abc`;
};

user.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new user("tea", "nkfsdjl@nfk.com", "765");
console.log(tea.encryptPassword());
console.log(tea.changeUserName());
