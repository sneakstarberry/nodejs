function solution(n, a, b) {
    var answer = 1;
    while (true) {
        if (a % 2 == 0 && a - 1 == b || a % 2 == 1 && a + 1 == b) {
            break
        }
        a = Math.ceil(a / 2)
        b = Math.ceil(b / 2)
        ++answer
    }


    return answer;
}
console.log(solution(8, 4, 6))