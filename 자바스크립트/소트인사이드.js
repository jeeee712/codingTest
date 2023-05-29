let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\r\n");

let arr = input[0].split("").map(Number);

arr.sort((a, b) => {
  return b - a;
});

answer = "";
for (let x of arr) {
  answer += x.toString();
}

console.log(answer);
