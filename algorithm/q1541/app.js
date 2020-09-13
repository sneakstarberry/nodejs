var fs = require("fs").readFileSync(`./stdin`, `utf8`).trim().split(`\n`);
fs = fs[0];
var val = 0;
var result = 0;
var isMinus = false;
var last = false;

for (var i = 0; i < fs.length; i++) {
  if (fs[i] == "-" || fs[i] == "+") {
    if (isMinus) {
      result -= val;
    } else {
      result += val;
    }
    val = 0;
    if (fs[i] == "-") {
      isMinus = true;
      continue;
    }
  } else {
    val *= 10;
    val += parseInt(fs[i]);
  }
}
if (isMinus) {
  result -= val;
} else {
  result += val;
}

console.log(result);
