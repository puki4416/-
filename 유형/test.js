const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function Push(target, number) {
  target.push(number);
}

function Pop(target) {
  if (target.length === 0) {
    return -1;
  } else {
    return target.pop();
  }
}

function Size(target) {
  return target.length;
}

function Empty(target) {
  if (target.length === 0) {
    return 1;
  } else {
    return 0;
  }
}

function Top(target) {
  if (target.length === 0) {
    return -1;
  } else {
    return target[target.length - 1];
  }
}

const stack = [];
const result = [];
for (let i = 1; i < input.length; i++) {
  const order = input[i].split(" ");
  if (order[0] === "push") {
    Push(stack, Number(order[1]));
  } else if (order[0] === "pop") {
    result.push(Pop(stack));
  } else if (order[0] === "size") {
    result.push(Size(stack));
  } else if (order[0] === "empty") {
    result.push(Empty(stack));
  } else {
    result.push(Top(stack));
  }
}

console.log(result.join("\n"));
