var n = require("fs").readFileSync(`./stdin`, `utf8`).trim();
n = parseInt(n)
var arr = new Array(101);
var result = 0;
var mod = 1000000000

for (var i=0; i<101; i++) {
    arr[i] = [0,0,0,0,0,0,0,0,0,0];
}

for (var i=1; i<=9; i++) {
    arr[1][i] = 1;
}

for (var i=2; i<=n; i++) {
    for (var j=0; j<=9; j++) {
        arr[i][j] = 0;
        if (j-1 >= 0) {
            arr[i][j] += arr[i-1][j-1];
        }
        if (j+1 <= 9) {
            arr[i][j] += arr[i-1][j+1];
        }
        arr[i][j] %= mod;
    }
}

for (var i=0; i<=9; i++) {
    result += arr[n][i];
}
result %=mod;
console.log(arr)
console.log(result);
