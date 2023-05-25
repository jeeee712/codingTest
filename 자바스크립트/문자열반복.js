let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");

let t = Number(input[0]);

for (let i = 1; i <= t; i++) {
  let [r, s] = input[i].split(" ");
  let p = "";
  for (let j = 0; j < s.length; j++) {
    p += s[j].repeat(Number(r));
  }
  console.log(p);
}
