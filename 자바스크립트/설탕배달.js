let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\r\n");

let n = Number(input[0]);
const nNumber = parseInt(n / 3);
let sum = 0;

for (let i = 0; i < nNumber; i++) {
  if (n % 5 == 0) {
    sum += n / 5;
    break;
  }
  n -= 3;
  sum += 1;
}

if (n == 1 || n == 2) {
  sum = -1;
}

console.log(sum);
