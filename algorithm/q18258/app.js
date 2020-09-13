var fs = require("fs").readFileSync("./stdin", "utf8").trim().split("\n");

var n = parseInt(fs.shift());
var arr = [];

var s = "";
var cnt = 0;

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
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
    if (this.root == null) {
        this.root = new Node(value)
        this.tail = this.root
    } else {
        this.tail.next = new Node(value)
        this.tail = this.tail.next
    }
}

List.prototype.pop = () => {
    if(this.root == null) {
        return -1
    } else {
        var tmp = this.root.value
        this.root = this.root.next
        if (this.root == null) {
            this.tail = null
        }

        return tmp
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
    if (arr[i][0] == 'back') {
        s +=`${a.back()}\n`
    }
}

console.log(s)