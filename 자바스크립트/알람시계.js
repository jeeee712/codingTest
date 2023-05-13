let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0].split(" ")[0]);
let b = Number(input[0].split(" ")[1]);

function alarm(x, y) {
  if (x == 0 && y < 45) console.log(`23 ${y + 15}`);
  else if (y < 45) console.log(`${x - 1} ${y + 15}`);
  else console.log(`${x} ${y - 45}`);
}

alarm(a, b);
