function solution(n, stations, w) {
    var answer = 0;
    var start = 0;

    for (var i = 0; i < stations.length; ++i) {
        var left = stations[i] - w - 1;
        var right = stations[i] + w;

        var tmp = left - start

        answer += Math.ceil(tmp / (w * 2 + 1))
        start = right;
        if (start > n) {
            break
        }
    }

    if (start < n) {
        answer += Math.ceil((n - start) / (w * 2 + 1))
    }

    return answer;
}


