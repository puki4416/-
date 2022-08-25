const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const result = [];

for (let i = 1; i < input.length; i++) {
  const stack = [];
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else {
      stack.push(input[i][j]);
    }
  }
  if (stack.length === 0) {
    result.push("YES");
  } else {
    result.push("NO");
  }
}

console.log(result.join("\n"));
