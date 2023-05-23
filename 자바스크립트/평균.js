let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");

let line1 = Number(input[0]);
let line2 = input[1].split(" ").map(Number);
let m = Math.max(...line2);
let score = [];

for (i = 0; i < line1; i++) {
  score.push((line2[i] / m) * 100);
}

let newAverage = 0;
for (j = 0; j < score.length; j++) {
  newAverage += score[j];
}

console.log(newAverage / score.length);
