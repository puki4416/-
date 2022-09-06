const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const dpArr = [];
const findTime = (i) => {
  const current = input[i].split(" ").map(Number);
  let time = 0;
  for (let j = 1; j < current.length - 1; j++) {
    if (dpArr[current[j]] !== undefined) {
      time = Math.max(time, dpArr[current[j]]);
    } else {
      findTime(current[j]);
      time = Math.max(time, dpArr[current[j]]);
    }
  }
  dpArr[i] = time + current[0];
};

for (let i = 1; i < input.length; i++) {
  if (dpArr[i] === undefined) {
    findTime(i);
  }
}
dpArr.shift();

console.log(dpArr.join("\n"));
