const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const list = input[1].split(" ").map(Number);

let left = 0;
let right = M - 1;
let sum = list.slice(left, right + 1).reduce((prev, cur) => prev + cur);
let max = sum;
let count = 1;
while (right < N) {
  left += 1;
  right += 1;
  if (right >= N) break;
  sum -= list[left - 1];
  sum += list[right];
  if (sum > max) {
    max = sum;
    count = 1;
  } else if (sum === max) {
    count += 1;
  }
}

if (max === 0) {
  console.log("SAD");
} else {
  console.log(max);
  console.log(count);
}
