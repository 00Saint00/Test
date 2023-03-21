// const { sum, calculator, subtract } = require("./math");

// console.log(sum(2, 3));
// console.log(calculator.multiply(3, 5));
// console.log(subtract(20, 7));

const math = require("./math");

const num1 = process.argv[2];
const num2 = process.argv[3];
const x = parseInt(num1);
const y = parseInt(num2);

console.log(x, y);

//addition
if (x && y) {
  console.log(`addition of ${x} and ${y}`);
  console.log(math.sum(x, y));

  //sub
  console.log(`subtraction of ${x} and ${y}`);
  console.log(math.subtract(x, y));

  //multiplication
  console.log(`multiplication of ${x} and ${y}`);
  console.log(math.calculator.multiply(x, y));
} else {
  console.log("input two numbers");
}
