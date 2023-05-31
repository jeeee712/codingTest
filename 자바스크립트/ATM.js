let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\r\n");

let n = Number(input[0]);
let p = input[1].split(" ").map(Number);
p.sort((a, b) => {
  return a - b;
});
let sum = 0;
let sumList = [];

for (let i = 0; i < p.length; i++) {
  sum += p[i];
  sumList.push(sum);
}

answer = 0;
for (let i = 0; i < sumList.length; i++) {
  answer += sumList[i];
}

console.log(answer);
