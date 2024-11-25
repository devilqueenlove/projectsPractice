class User {
  constructor(user) {
    this.username = user;
  }
  logMe() {
    console.log(`user nmae is ${this.username}`);
  }

  static createId() {
    // create rndom id when user is created
    return `213113`;
  }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId()); // now gives error cz of static keyword

// for stoping the method for eveery stances of the class - use static

class Teacher extends User {
  constructor(user, email) {
    super(user);
    this.email = email;
  }
}

const iphoe = new Teacher("iphone", "kdfj@jkfd.com");
console.log(iphoe.logMe());
console.log(iphoe.createId()); // not even to extands also
