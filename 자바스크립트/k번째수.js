let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\r\n");

let k = Number(input[0].split(" ")[1]);
let arr = input[1].split(" ").map(Number);

arr.sort((a, b) => {
  return a - b;
});

console.log(arr[k - 1]);
