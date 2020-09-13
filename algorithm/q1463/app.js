var fs = require("fs").readFileSync(`./stdin`, `utf8`).trim().split(`\n`);

var num = fs[0];

var arr = [];
arr[0] = 0;
arr[1] = 0;
arr[2] = 1;
arr[3] = 1;

for (var i = 3; i <= num; i++) {
  if (i % 3 == 0) {
    arr[i] = Math.min(arr[i / 3] + 1, arr[i - 1] + 1);
  } else if (i % 2 == 0) {
    arr[i] = Math.min(arr[i / 2] + 1, arr[i - 1] + 1);
  } else {
    arr[i] = arr[i - 1] + 1;
  }
}

console.log(arr[num]);
