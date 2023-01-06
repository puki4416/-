const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);

const range = Number(input[1]);
const list = input[2].split("");
let result = 0;

for (let i = 0; i < list.length; i++) {
  if (list[i] !== "P") continue;
  for (let j = i - range; j <= i + range; j++) {
    if (j < 0 || j >= list.length) continue;
    if (list[j] === "H") {
      list[j] = "E";
      result++;
      break;
    }
  }
}

console.log(result);
