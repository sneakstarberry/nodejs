var fs = require("fs").readFileSync(`./stdin`, `utf8`).trim().split("\n");
var tmp = fs[0].split(" ");

var n = parseInt(tmp[0]);
var k = parseInt(tmp[1]);

arr = [];
result = [];

var s = "<";
for (var i = 0; i < n; i++) {
  arr[i] = i + 1;
}
var val = k-1;
for (var i = 0; i < parseInt(n); i++) {
  s+=`${arr[val]}`;
  if(i != n-1) {
      s+=", ";
  }
  arr.splice(val, 1);
  val += k-1;
  val %= n - i - 1;

  arr[i];
}
s+='>'
console.log(s);
