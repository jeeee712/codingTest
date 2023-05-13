let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0].split(" ")[0]);
let b = Number(input[0].split(" ")[1]);
let c = Number(input[1]);

function oven(hour, minutes, oventime) {
  minutes += oventime;
  if (minutes >= 60) {
    hour += parseInt(minutes / 60);
    minutes = minutes % 60;
    if (hour >= 24) {
      hour -= 24;
    }
  }
  console.log(`${hour} ${minutes}`);
}

oven(a, b, c);
