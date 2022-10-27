const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const [island1, island2] = input.pop().split(" ").map(Number);
const board = new Array(N + 1).fill(0).map(() => []);

for (let i = 0; i < input.length; i++) {
  const row = input[i].split(" ").map(Number);
  board[row[0]].push([row[1], row[2]]);
  board[row[1]].push([row[0], row[2]]);
}
let start = 0;
let end = 1000000000;
let mid = 0;
let result = 0;
while (start <= end) {
  mid = Math.floor((start + end) / 2);
  let flag = false;
  const queue = [island1];
  const visited = [];
  let min = Infinity;
  visited[island1] = 0;
  out: while (queue.length > 0) {
    const target = queue.shift();
    for (let i = 0; i < board[target].length; i++) {
      const [next, limit] = board[target][i];
      if (limit >= mid && visited[next] !== 0) {
        min = Math.min(min, limit);
        if (next === island2) {
          flag = true;
          break out;
        }
        queue.push(next);
        visited[next] = 0;
      }
    }
  }
  if (flag) {
    result = min;
    start = min + 1;
  } else {
    end = mid - 1;
  }
}
console.log(result);
