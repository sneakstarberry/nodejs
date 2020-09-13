var fs = require("fs").readFileSync("./stdin", "utf8").trim().split("\n");

var n = parseInt(fs[0]);
var arr = fs[1]
  .trim()
  .split(" ")
  .map((x, _) => parseInt(x));
var dp = [0];

for (var i = 0; i < n; i++) {
  dp[i] = 1;
  for (var j = 0; j < i; j++) {
    if (dp[j] + 1 > dp[i] && arr[j] < arr[i]) {
      dp[i] = dp[j] + 1;
    }
  }
}

dp.sort((a,b) => a-b)

console.log(dp[dp.length-1]);
