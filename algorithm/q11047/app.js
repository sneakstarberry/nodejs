var fs = require('fs').readFileSync(`./stdin`, `utf8`).trim().split('\n');

var K = fs[0].trim().split(" ")[1];
fs.shift();
var arr = fs;
var cnt = 0;

for (var i=arr.length-1; i>=0; i--) {
    if (K % parseInt(arr[i]) != K) {
        cnt+= Math.floor(K/parseInt(arr[i]));
        K %= parseInt(arr[i]);
    }
}

console.log(cnt)