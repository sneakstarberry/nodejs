var fs = require("fs").readFileSync("./stdin", "utf8").trim().split("\n");

var n = parseInt(fs.shift());
var arr = [];

var s = "";
var cnt = 0;

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class List {
    constructor() {
        this.root = null;
        this.tail = null;
    }
}

List.prototype.back = ()=> {
    if (this.tail != null){
        return this.tail.value
    } else {
        return -1
    }
}

List.prototype.front = () => {
    if (this.root != null) {
        return this.root.value
    } else {
        return -1
    }
}

List.prototype.push = (value) => {
    if (this.tail == null) {
        this.root = new Node(value)
        this.tail = this.root
    } else {
        this.tail.next = new Node(value)
        var prev = this.tail
        this.tail = this.tail.next
        this.tail.prev = prev
    }
}

List.prototype.pop = () => {
    if(this.tail == null) {
        return -1
    } else {
        tmp = this.tail
        this.tail = this.tail.prev
        return tmp.value
    }
}


var a = new List();

for (var i = 0; i < n; ++i) {
    arr[i] = fs[i].trim().split(" ");
    if (arr[i][0] == 'push') {
        a.push(arr[i][1]);
        ++cnt
    }
    if (arr[i][0] == 'pop') {
        s+= `${a.pop()}\n`
        if (cnt !=0){--cnt}
    }
    if (arr[i][0] == 'size') {
        s +=`${cnt}\n`
    }
    if (arr[i][0] == 'empty') {
        if (cnt ==0) {
            s+= "1\n"
        } else {
            s+= "0\n"
        }
    }
    if (arr[i][0] == 'front') {
        s +=`${a.front()}\n`
    }
    if (arr[i][0] == 'top') {
        s +=`${a.back()}\n`
    }
}

console.log(s)