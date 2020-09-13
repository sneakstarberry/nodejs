function solution(gems) {
    var answer = [];
    var arr = [];
    var width = Array(gems.length)

    for (var i = 0; i < gems.length; ++i) {
        if (!arr.includes(gems[i])){
            arr.push(gems[i])
        }
    }
    for (var i = 0 ; i< gems.length; ++i) {
        var arr2 = arr.slice()
        for (var j = i ; j< gems.length; ++j){
            if (arr2.includes(gems[j])){
                arr2.splice(arr2.indexOf(gems[j]), 1)
            }
            if (arr2.length ===0) {
                width[i] = [i+1, j+1]
                break
            }
        }
    }

    width.sort((a,b) => (a[1] - a[0]) === (b[1]- b[0]) ? a[0] - b[0]:(a[1] - a[0]) - (b[1]- b[0]))
    answer = width[0]
    return answer;
}

console.log(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]))