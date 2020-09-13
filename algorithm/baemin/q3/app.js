class Account {
    constructor(name, max) {
        this.money = 0;
        this.max = max;
        this.name = name;
    }

    deposit(money) {
        this.money += money
        return 200
    }

    withdraw(money) {
        if (this.money - money < -this.max) {
            return 403
        } else {
            this.money -= money;
            return 200
        }
    }
}

function solution(reqs) {
    var answer = [];
    var arr = [];
    for (var i = 0; i < reqs.length; ++i) {
        reqs[i] = reqs[i].split(" ")
    }
    
    for (var i = 0; i < reqs.length; ++i) {
        var len = arr.length
        if (reqs[i][0] === "CREATE") {
            // console.log("Create")
            for (var j = 0; j < len; ++j) {
                if (reqs[i][1] === arr[j].name) {
                    answer.push(403)
                    break
                } else if (arr.length - 1 === j) {
                    arr.push(new Account(reqs[i][1], reqs[i][2]))
                    answer.push(200)
                }

            }
            if (arr.length === 0) {
                arr.push(new Account(reqs[i][1], reqs[i][2]))
                answer.push(200)
            }
        }
        if (reqs[i][0] === "DEPOSIT") {
            // console.log("DEPOSIT")
            for (var j = 0; j < len; ++j) {
                if (reqs[i][1] === arr[j].name) {
                    answer.push(arr[j].deposit(reqs[i][2]));
                    break
                } else if (arr.length - 1 === j) {
                    answer.push(404)
                }
            }
            if (len === 0) {
                answer.push(404)
            }
        }
        if (reqs[i][0] === "WITHDRAW") {
            // console.log("WITHDRAW")
            for (var j = 0; j < len; ++j) {
                if (reqs[i][1] === arr[j].name) {
                    answer.push(arr[j].withdraw(reqs[i][2]));
                    break
                } else if (arr.length - 1 === j) {
                    answer.push(404)
                }

            }
            if (len === 0) {
                answer.push(404)
            }

        }
    }

    return answer;
}

// solution(["DEPOSIT 3a 10000", "CREATE 3a 300000", "WITHDRAW 3a 150000", "WITHDRAW 3a 150001", "CREATE 2a 300000"])