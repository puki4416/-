const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
const A = input[2].split(" ").map(Number);
const B = input[4].split(" ").map(Number);
const saveArr = {};
let result = 0;

for (let i = 1; i < A.length; i++) {
  A[i] += A[i - 1];
}

for (let i = 1; i < B.length; i++) {
  B[i] += B[i - 1];
}

for (let i = 0; i < A.length; i++) {
  for (let j = i - 1; j >= -1; j--) {
    if (j === -1) {
      if (saveArr[T - A[i]] === undefined) {
        saveArr[T - A[i]] = 1;
      } else {
        saveArr[T - A[i]] += 1;
      }
    } else {
      if (saveArr[T - A[i] + A[j]] === undefined) {
        saveArr[T - A[i] + A[j]] = 1;
      } else {
        saveArr[T - A[i] + A[j]] += 1;
      }
    }
  }
}

for (let i = 0; i < B.length; i++) {
  for (let j = i - 1; j >= -1; j--) {
    if (j === -1) {
      if (saveArr[B[i]] !== undefined) {
        result += saveArr[B[i]];
      }
    } else {
      if (saveArr[B[i] - B[j]] !== undefined) {
        result += saveArr[B[i] - B[j]];
      }
    }
  }
}

console.log(result);
