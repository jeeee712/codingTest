let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\r\n");

let sik = input[0].split("-");
let sumList = [];

let sum = 0;
for (let i = 0; i < sik.length; i++) {
  sum = 0;
  sik[i] = sik[i].split("+").map(Number);
  for (let j = 0; j < sik[i].length; j++) {
    sum += Number(sik[i][j]);
  }
  sumList.push(sum);
}

let answer = 0;
for (i = 1; i < sumList.length; i++) {
  answer += sumList[i];
}

console.log(sumList[0] - answer);
