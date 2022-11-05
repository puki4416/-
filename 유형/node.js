const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let dp = new Array(5).fill(0).map(() => []);
dp[0][0] = 0;
for (let i = 0; i < input.length - 1; i++) {
  let temp = new Array(5).fill(0).map(() => []);
  for (let j = 0; j < 5; j++) {
    for (let k = 0; k < 5; k++) {
      if (dp[j][k] === undefined) continue;
      for (let l = 0; l < 2; l++) {
        const target = l === 0 ? j : k;
        let point = 0;

        if (target === input[i]) {
          point = 1;
        } else if (target === 0) {
          point = 2;
        } else if (
          (target + 1 === 5 ? 1 : target + 1) === input[i] ||
          (target - 1 === 0 ? 4 : target - 1) === input[i]
        ) {
          point = 3;
        } else {
          point = 4;
        }
        if (l === 0) {
          temp[input[i]][k] =
            temp[input[i]][k] === undefined
              ? dp[j][k] + point
              : Math.min(temp[input[i]][k], dp[j][k] + point);
        } else {
          temp[j][input[i]] =
            temp[j][input[i]] === undefined
              ? dp[j][k] + point
              : Math.min(temp[j][input[i]], dp[j][k] + point);
        }
      }
    }
  }
  dp = temp;
}
dp = dp.flat();
dp.sort(function (a, b) {
  return a - b;
});
console.log(dp[0]);
