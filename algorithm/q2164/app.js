var fs = require("fs").readFileSync("./stdin", "utf8").toString().trim();

var n = parseInt(fs);
var arr = Array(n);
var tmp = 0;

for (var i = 0; i < n; i++) {
    arr[i] = i+1
}
var i = 0;
while (arr.length > i) {
    if (i % 2 - 1 == 0) {
        arr.push(arr[i]);
    }
    ++i
}

console.log(arr[i-1])