let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let t = Number(input[0]);
let sum = "";

for (let i = 0; i < t; i++) {
  sum +=
    Number(input[i + 1].split(" ")[0]) +
    Number(input[i + 1].split(" ")[1]) +
    "\n";
}

console.log(sum);
