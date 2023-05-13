let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");

let score = Number(input[0].split(" ")[0]);

if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");
else if (score >= 70) console.log("C");
else if (score >= 60) console.log("D");
else console.log("F");
