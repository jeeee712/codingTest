// Sort 함수 이용

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = input[0];
let arr = new Array();

for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}

arr.sort((a, b) => {
  return a - b;
});

let answer = "";

for (let j = 0; j < arr.length; j++) {
  answer += arr[j] + "\n";
}

console.log(answer);
