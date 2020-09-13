var fs = require("fs").readFileSync("./stdin", "utf8").trim().split("\n");

var n = parseInt(fs[0])
fs.shift()

// class Node {
//     constructor (vip, isAim) {
//         this.vip = vip;
//         this.isAim = isAim;
//         this.next = null;
//     }
// }

// class List {
//     constructor () {
//         this.tail = null;
//         this.head = null;
//     }
// }

class Node {
    constructor(val, idx) {
        this.val = val
        this.idx = idx
        this.next = null
    }
}

class List {
    constructor() {
        this.tail = null
        this.head = null
    }
}
var s="";
for (var i=0; i<n*2; i+=2) {
    var aim = fs[i].trim().split(" ");
    var q = fs[i+1].trim().split(" ");
    var arr = [];
    // var l = new List();
    for (var j = 0; j<aim[0]; ++j) {
        arr[j] = new Node(q[j], j)
        var tmp = arr.shift()
    }
    if(i ==4 ) {
        for (var j = 0; j<arr.length; j++) {
            s +=`${arr[j].idx}\n`;

        }
    }
}


console.log(s)