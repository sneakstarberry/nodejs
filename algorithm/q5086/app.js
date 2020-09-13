var fs = require("fs").readFileSync("./stdin", "utf8").trim().split("\n");
var arr = [];
for (var i = 0; i < fs.length - 1; i++) {
  arr[i] = fs[i].trim().split(" ");

  if (arr[i][0] % arr[i][1] == 0 || arr[i][1] % arr[i][0] == 0) {
    if (parseInt(arr[i][0]) > parseInt(arr[i][1])) {
      console.log("multiple")
    } else {
      console.log("factor")
    }
  } else {
    console.log("neither")
  }
}

