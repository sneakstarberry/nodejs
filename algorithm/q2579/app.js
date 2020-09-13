var fs = require("fs").readFileSync(`./stdin`, `utf8`).trim().split(`\n`);
var num = fs[0];
fs.shift();

var stair = [];
for (var i = 0; i < num; i++) {
  stair[i] = parseInt(fs[i]);
}
var max = [];

function maxNum(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

max[0] = stair[0];
max[1] = maxNum(stair[0] + stair[1], stair[1]);
max[2] = maxNum(stair[0] + stair[2], stair[1] + stair[2]);

for (var i = 3; i < num; i++) {
  max[i] = maxNum(stair[i] + stair[i - 1] + max[i - 3], stair[i] + max[i - 2]);
}
var result = max[num - 1];

console.log(result);
