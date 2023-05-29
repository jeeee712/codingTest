let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\r\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(" ");
  arr.push([x, y]);
}

function compare(a, b) {
  if (Number(a[0]) != b[0]) {
    return Number(a[0]) - Number(b[0]);
  }
}

arr.sort(compare);
let answer = "";

for (let x of arr) {
  answer += x[0] + " " + x[1] + "\n";
}

console.log(answer);
