let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\r\n");

let n = Number(input[0]);
let arr = new Set();

for (let i = 1; i <= n; i++) {
  arr.add(input[i]);
}

arr = [...arr];

function compare(a, b) {
  if (a.length != b.length) {
    return a.length - b.length;
  }
}

arr.sort();
arr.sort(compare);

let answer = "";

for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}

console.log(answer);
