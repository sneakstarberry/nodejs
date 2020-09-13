var fs = require("fs").readFileSync("./stdin", "utf8").trim().split("\n");
var arr = Array(2)
  .fill(null)
  .map(() => Array());
var max = [-1, -1];
var cnt = 0;

// 입력
var n = fs[0];
fs.shift();
for (let i = 0; i < n; i++) {
  arr[i] = fs[i].trim().split(" ");
}
// 회의 시간순 정렬
arr.sort((a, b) => {
  if (a[1] != b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

// 최대 개수 확인
for (let i = 0; i < n; i++) {
    if (parseInt(max[1]) <= parseInt(arr[i][0])){
        
        // console.log(max, arr[i])
        max = arr[i]
        // console.log(max)
        cnt++
    }
}

console.log(cnt);
