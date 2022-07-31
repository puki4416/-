const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

const dpArr = new Array(3 * input.length).fill(0);
dpArr[1] = input[0];

for (let i = 1; i < input.length; i++) {
  if (dpArr[(i - 1) * 3] > dpArr[i * 3 + 2]) {
    dpArr[i * 3 + 2] = dpArr[(i - 1) * 3];
  }
  if (dpArr[(i - 1) * 3 + 1] + input[i] > dpArr[i * 3]) {
    dpArr[i * 3] = dpArr[(i - 1) * 3 + 1] + input[i];
  }
  if (dpArr[(i - 1) * 3 + 1] > dpArr[i * 3 + 2]) {
    dpArr[i * 3 + 2] = dpArr[(i - 1) * 3 + 1];
  }
  if (dpArr[(i - 1) * 3 + 2] + input[i] > dpArr[i * 3 + 1]) {
    dpArr[i * 3 + 1] = dpArr[(i - 1) * 3 + 2] + input[i];
  }
  if (dpArr[(i - 1) * 3 + 2] > dpArr[i * 3 + 2]) {
    dpArr[i * 3 + 2] = dpArr[(i - 1) * 3 + 2];
  }
}

console.log(Math.max(...dpArr));
