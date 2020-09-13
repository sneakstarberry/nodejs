function solution(clothes) {
    var answer = 1;
    var arr = [];
    var num = [];
    for (var i=0; i<clothes.length; ++i) {
        if(!arr.includes(clothes[i][1])){
            arr.push(clothes[i][1])
            num.push(1);
        } else {
            num[arr.indexOf(clothes[i][1])]++
        }
    }

    for (var i=0; i< num.length; ++i) {
        answer *= num[i]+1
    }
    answer = answer-1;
    return answer;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))