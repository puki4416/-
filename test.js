const [N, M, ...numbers] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

let start = 0;
let end = 0;
let sum = numbers[0];
let result = 0;
while (end < numbers.length) {
  if (sum === M) {
    result += 1;
    end += 1;
    sum += numbers[end];
  } else if (sum > M) {
    sum -= numbers[start];
    start += 1;
  } else {
    end += 1;
    sum += numbers[end];
  }
}

console.log(result);
