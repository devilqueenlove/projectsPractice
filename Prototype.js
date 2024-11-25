// Protototype  -
let myName = "Hitesh   ";

// console.log(myName.length);
// console.log(myName.trueLength());

// define a method trueLength - which shows the exact length of string

let myHeroes = ["thor", "spiderMan"];
let heroPower = {
  thor: "Hammer",
  spiderMan: "sling",
  getSpiderPower: function () {
    console.log(`spider Power is ${this.spiderMan}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`Hitesh is now present in al objects`);
};
// heroPower.hitesh();
// myHeroes.hitesh();

Array.prototype.Arrayhitesh = function () {
  console.log(`HiteshArray : present  in All Arrays`);
};

// myHeroes.Arrayhitesh();
// heroPower.Arrayhitesh();

// ==================================> Inheretence <====================================

const user = {
  name: "chai",
  email: "cahi@googel.com",
};
const teacher = {
  makeVideo: true,
};
const teachingSupport = {
  isAvalable: false,
};
const TASupport = {
  makeAssignment: true,
  fullTime: true,
  __proto__: teachingSupport,
};

teacher.__proto__ = user;

//  modern syntax
Object.setPrototypeOf(teachingSupport, teacher);

// ==================SOLUTION ==========
let anotherUserName = "chaiAurCode        ";
String.prototype.truelength = function () {
  console.log(`${this}`);
  console.log(`truelength is ${this.trim().length}`);
};

// anotherUserName.truelength();
"   hitesh".truelength();
"icetea ".truelength();
