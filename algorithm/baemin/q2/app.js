function solution(arr) {
    var answer =0;
    var group = [];

    arr = arr.map((x)=>x.toString())

    for (var i= 0; i<arr.length; ++i) {
        arr[i] = arr[i].split("").sort((a, b) => a-b)
        arr[i] = arr[i].toString();
    }

    for (var i =0; i<arr.length; ++i) {
        if (!group.includes(arr[i])) {
            group.push(arr[i])
        }
    }

    answer = group.length

    return answer;
}
solution([112,1814,121,1481,1184])