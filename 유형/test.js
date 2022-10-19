const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const board = [];
let deletedCount = 0;
let time = 0;
const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
for (let i = 1; i < input.length; i++) {
  board.push(input[i].split(" "));
}
while (true) {
  let queue = [[0, 0]];
  const visited = new Array(101).fill(0).map(() => []);
  visited[0][0] = 0;
  const deleted = [];
  let count = 0;
  while (queue.length !== 0) {
    const tempt = [];
    for (let i = 0; i < queue.length; i++) {
      for (let j = 0; j < 4; j++) {
        const moveCur = [queue[i][0] + move[j][0], queue[i][1] + move[j][1]];
        if (
          moveCur[0] >= 0 &&
          moveCur[1] >= 0 &&
          moveCur[0] < board.length &&
          moveCur[1] < board[0].length &&
          visited[moveCur[0]][moveCur[1]] !== 0
        ) {
          if (board[moveCur[0]][moveCur[1]] === "1") {
            deleted.push(moveCur);
          } else {
            tempt.push(moveCur);
          }
          visited[moveCur[0]][moveCur[1]] = 0;
        }
      }
    }
    queue = tempt;
  }
  for (let i = 0; i < deleted.length; i++) {
    if (board[deleted[i][0]][deleted[i][1]] === "1") {
      board[deleted[i][0]][deleted[i][1]] = 0;
      count++;
    }
  }
  if (count === 0) {
    break;
  }
  deletedCount = count;
  time++;
}
console.log(time);
console.log(deletedCount);
