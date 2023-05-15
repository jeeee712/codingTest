let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0].split(" ")[0]);
let star = "";

for (let i = 0; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  star += "\n";
}

console.log(star);
