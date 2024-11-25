class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New course added by ${this.username}`);
  }
}

const user1 = new Teacher("chai233", "cahi@teacehr.com", 123);
// console.log(user1);
console.log(user1.addCourse());

const masalaChai = new User("heymasalachai");
// console.log(masalaChai.addCourse());
console.log(masalaChai.logMe());

console.log(user1 === masalaChai); // false
console.log(user1 instanceof User); //true
console.log(Teacher instanceof User); //false
