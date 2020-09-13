function solution(n, lost, reserve) {
    var answer = n-lost.length;
    
    for (var i = 0; i<lost.length; ++i) {
        if (reserve.includes(lost[i]-1)){
            reserve.splice(reserve.indexOf(lost[i]-1), 1)
            ++answer
        } else if (reserve.includes(lost[i])) {
            reserve.splice(reserve.indexOf(lost[i]), 1)
            ++answer

        } else if (reserve.includes(lost[i]+1)){
            reserve.splice(reserve.indexOf(lost[i]+1), 1)
            ++answer

        }
    }
    return answer;
}