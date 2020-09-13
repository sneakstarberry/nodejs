var fs = require('fs').readFileSync(`./stdin`, `utf8`).trim();

function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}

var str = replaceAll(fs, "()", "a")
arr = []
var result = 0

for (var i=0; i< str.length; i++) {
    if (str[i] == "("){
        arr.push(0)
    }
    if (str[i] == "a"){
        for (var j=0; j<arr.length; j++) {
            arr[j]++
        }
    }
    if (str[i] == ")") {
        result += arr[arr.length-1]+1
        arr.pop();
    }
}

console.log(result)
