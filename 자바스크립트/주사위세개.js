let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0].split(" ")[0]);
let b = Number(input[0].split(" ")[1]);
let c = Number(input[0].split(" ")[2]);

let abc = [a, b, c];
abc.sort();

if (abc[0] == abc[1] && abc[1] == abc[2]) {
  console.log(10000 + abc[0] * 1000);
} else if (abc[0] == abc[1] || abc[1] == abc[2]) {
  console.log(1000 + abc[1] * 100);
} else {
  console.log(abc[2] * 100);
}
