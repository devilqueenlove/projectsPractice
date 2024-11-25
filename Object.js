function multiFive(num) {
  return num * 5;
}

// multiFive(5);
// multiFive.power = 2;
// console.log(multiFive(5));
// console.log(multiFive.power);
// console.log(multiFive.prototype);

function createUser(userName, score) {
  this.userName = userName;
  this.score = score;
  //   console.log(this);
}
// createUser("harsh", 34);

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`score is : ${this.score}`);
};

const tea = createUser("tea", 260); // gives error
tea.increment();
tea.score();

const chai = new createUser("Chat", 21); // no error
chai.increment();
chai.printMe();
