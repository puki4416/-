const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const resultArr = [];
let i = 666;
while (resultArr.length < 10000) {
  if (String(i).indexOf("666") !== -1) {
    resultArr.push(i);
  }
  i++;
}
console.log(resultArr[input - 1]);
