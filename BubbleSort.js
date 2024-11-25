const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("This is the algorithm for showing BUBBLE SORT!");

rl.question(`Enter the number to sort them out \n`, (input) => {
  const array = input.split(",").map(Number);
  console.log("The input  numbers are ", array);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[i]) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
      log(array, array[i], array[j]);
    }
  }

  rl.close();
});
