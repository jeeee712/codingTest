let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");

numbers = input[0].split(" ").map(Number);
numbers.sort(function (a, b) {
  return a - b;
});

console.log(`${numbers[0]} ${numbers[1]} ${numbers[2]}`);
