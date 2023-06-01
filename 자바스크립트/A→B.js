let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\r\n");

let [a, b] = input[0].split(" ").map(Number);
