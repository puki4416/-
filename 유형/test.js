const fs = require("fs");
const testCase = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);
testCase.pop();
const maxNum = 2 * Math.max(...testCase);
const progressArr = [];
const result = [];
progressArr[1] = 0;

for (let i = 2; i <= Math.sqrt(maxNum); i++) {
  for (let j = i * 2; j <= maxNum; j = j + i) {
    progressArr[j] = 0;
  }
}

for (let i = 0; i < testCase.length; i++) {
  let count = 0;
  for (let j = testCase[i] + 1; j <= testCase[i] * 2; j++) {
    if (progressArr[j] !== 0) {
      count++;
    }
  }
  result.push(count);
}

console.log(result.join("\n"));
