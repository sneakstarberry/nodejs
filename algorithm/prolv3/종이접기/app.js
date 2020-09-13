function solution(n) {
    var answer = [];
    var arr = [];


    arr[0] = [0];
    arr[1] = [0, 0, 1]
    // arr[2] = [0, 0, 1, 0, 0, 1, 1]

    for (var i = 2; i < n; ++i) {
        var arr2 = [];
        for (var j = 0; j < arr[i-1].length; ++j) {
            if(arr[i-1][j] == 0){
                arr2[arr[i-1].length-1-j] = 1
            } else {
                arr2[arr[i-1].length-1-j] = 0
            }
        }
        arr[i-1].push(0);
        arr[i] = arr[i - 1].concat(arr2)
    }
    answer = arr[n-1]
    return answer;
}
solution(3)
// 0 0 1 0 0 1 1 0 0