var n = require("fs").readFileSync(`./stdin`, `utf8`).trim().split("\n");
let num = parseInt(n[0]);
let lCard = n[1].trim().split(" ").map((x) => parseInt(x)).reverse();
let rCard = n[2].trim().split(" ").map((x) => parseInt(x)).reverse();

let arr = [];
let dp = [];

for (let i=0; i <= num; i++){
    arr = [];
    for(let j =0; j<=num; j++){
        arr.push(0);
    }
    dp[i] = arr;
}


for (let L = 1; L<=num; L++) {
    for (let R =1; R<=num; R++) {
        if (lCard[L - 1] > rCard[R -1]) {
            dp[L][R] = dp[L][R-1] + rCard[R-1];
        }
        dp[L][R] = Math.max(dp[L][R], Math.max(dp[L -1][R - 1], dp[L-1][R]));
    }
}

console.log(dp[num][num])
