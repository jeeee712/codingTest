let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\r\n");

let n = Number(input[0]);
let sum = 0;
sum += parseInt(n / 5);
let newN = n - sum * 5;

if (newN % 3 != 0) {
  if (n % 3 == 0) {
    sum = n / 3;
  } else {
    sum = -1;
  }
} else {
  sum += n / 3;
}

console.log(sum);
