class Agroup {
    constructor(start, end) {
        this.start = start
        this.end = end
        this.width = end - start
    }

    len() {
        this.width = this.end - this.start
    }
}

function solution(name) {
    var answer = 0;
    var right = name.length - 1;
    var arr = [];
    var nums = name.split("").map(v => v.charCodeAt(0) - 65)
    for (var i = 0; i < nums.length; ++i) {
        if (13 < nums[i]) {
            answer += 26 - nums[i]
        } else {
            answer += nums[i]
        }
    }

    if (nums[0] === 0) {
        arr.push(new Agroup(0))
    }

    for (var i = 1; i <= nums.length; ++i) {
        
        if (nums[i] === 0 && nums[i - 1] != 0) {
            arr.push(new Agroup(i))
        } else if (nums[i] != 0 && nums[i - 1] === 0) {
            arr[arr.length - 1].end = i
        }
        if (arr.length > 0) {
            arr[arr.length - 1].len()
        }
    }

    arr.sort((a, b) => a.width === b.width ? b.start - a.start : a.width - b.width)

    for (var i = 0; i < arr.length; ++i) {
        if (arr[i].end === nums.length) {
            right = nums.length - arr[i].width - 1
        }
    }
    if (arr.length > 0) {
        if (arr[arr.length - 1].start - 2 + nums.length - arr[arr.length - 1].width < right) {
            answer += arr[arr.length - 1].start - 2 + nums.length - arr[arr.length - 1].width
        } else {
            answer += right
        }
    } else {
        answer +=right
    }


    return answer;
}

console.log(solution("AZAAZ"))