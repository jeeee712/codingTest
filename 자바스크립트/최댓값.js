let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let numbers = input.map(Number);

let numbersMax = Math.max(...numbers);

console.log(numbersMax, numbers.indexOf(numbersMax) + 1);
