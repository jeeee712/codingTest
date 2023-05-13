let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = input[0].split(" ")[0];

for (i = 1; i < 10; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
