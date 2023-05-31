let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\r\n");

let [n, k] = input[0].split(" ").map(Number);
let coin = 0;

for (i = n; i >= 1; i--) {
  coin += parseInt(k / Number(input[i]));
  k = k % Number(input[i]);
}

console.log(coin);
