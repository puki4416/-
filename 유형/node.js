const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(""));
input.shift();

let count = 0;
let round = 1;

function solution(x, y) {
  let curx = x;
  let cury = y;
  let prev = [];

  while (true) {
    prev[0] = curx;
    prev[1] = cury;
    switch (input[curx][cury]) {
      case "U":
        curx -= 1;
        break;
      case "D":
        curx += 1;
        break;
      case "L":
        cury -= 1;
        break;
      case "R":
        cury += 1;
        break;
    }
    input[prev[0]][prev[1]] = round;
    if (typeof input[curx][cury] === "number") {
      if (input[curx][cury] === round) {
        count++;
      }
      round++;
      break;
    }
  }
}

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (typeof input[i][j] === "string") {
      solution(i, j);
    }
  }
}
console.log(count);
