let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let answer = 0;

for (i of input[1]) {
  answer += Number(i);
}

console.log(answer);
