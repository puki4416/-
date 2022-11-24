const [max, ...board] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row, index) => (!index ? Number(row) : row.split("").map(Number)));

let result = [];
const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

for (let i = 0; i < max; i++) {
  for (let j = 0; j < max; j++) {
    if (board[i][j] === 1) {
      bfs([i, j]);
    }
  }
}

function bfs(start) {
  const queue = [[...start]];
  board[start[0]][start[1]] = 0;
  let count = 1;
  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const xPos = x + dir[i][0];
      const yPos = y + dir[i][1];

      if (0 <= xPos && 0 <= yPos && xPos < max && yPos < max) {
        if (board[xPos][yPos] === 1) {
          board[xPos][yPos] = 0;
          queue.push([xPos, yPos]);
          count++;
        }
      }
    }
  }
  result.push(count);
}

result.sort((a, b) => a - b);
result.unshift(result.length);
console.log(result.join("\n"));
