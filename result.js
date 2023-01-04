const [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let number = N;
while (true) {
  const twoNum = [...number.toString(2)];
  const bottle = twoNum.filter((e) => e === "1").length;
  if (bottle > K) {
    twoNum.reverse();
    number = number + 2 ** twoNum.indexOf("1");
  } else {
    break;
  }
}

console.log(number - N);
