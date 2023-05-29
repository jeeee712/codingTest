let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\r\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let newArr = [...new Set(arr)];
newArr.sort((a, b) => {
  return a - b;
});

let map = new Map();

for (let i = 0; i < newArr.length; i++) {
  map.set(newArr[i], i);
}

let answer = "";
for (let i of arr) {
  answer += map.get(i) + " ";
}

console.log(answer);
