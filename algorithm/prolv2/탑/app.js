function solution(heights) {
    var answer = [];
    
    for (var i=heights.length-1;i>= 0; --i) {
        for (var j=i-1; j>=0; --j){
            if (heights[i] <heights[j]){
                answer.push(j+1);
                break
            }
        }
        if (answer.length != heights.length - i){
            answer.push(0)
        }
    }
    answer.reverse();
    return answer;
}

console.log(solution([6,9,5,7,4]))