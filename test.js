const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [Y, X] = input.shift().split(" ").map(Number);
const board = input.map((row) => row.split(" ").map(Number));

const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

let queue = [];
let result = -1;

// 처음 토마토가 있는 위치 찾기
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[0].length; j++) {
    if (board[i][j] === 1) queue.push([i, j]);
  }
}

// bfs를 이용해 초기값으로부터 붙어있는 토마토들 모두 익게 만들기
while (queue.length) {
  result++;
  const tempt = [];
  for (let i = 0; i < queue.length; i++) {
    for (let j = 0; j < 4; j++) {
      const cur = [queue[i][0] + dir[j][0], queue[i][1] + dir[j][1]];
      if (
        cur[0] >= 0 &&
        cur[1] >= 0 &&
        cur[0] < X &&
        cur[1] < Y &&
        board[cur[0]][cur[1]] === 0
      ) {
        board[cur[0]][cur[1]] = 1;
        tempt.push(cur);
      }
    }
  }
  queue = tempt;
}

// 아직 익지 않는 토마토 찾기
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[0].length; j++) {
    if (board[i][j] === 0) result = -1;
  }
}

console.log(result);
