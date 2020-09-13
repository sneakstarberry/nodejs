function solution(numbers, hand) {
    var answer = '';
    var s = "";
    var lefty = 10;
    var righty = 13;
    var arr = [2, 5, 8, 11];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            numbers[i] = 11
        }
    }

    function dis1(num1, num2) {
        return num1 - num2 / 2 + 1
    }
    function dis2(num1, num2) {
        return num1 - num2 / 2
    }

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            lefty = numbers[i]
            s += "L"
        } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            righty = numbers[i]
            s += "R"
        } else {
            if (arr.includes(lefty) && arr.includes(righty)) {
                if (Math.abs(numbers[i] - lefty) === Math.abs(numbers[i] - righty)) {
                    if (hand === "left") {
                        lefty = numbers[i]
                        s += "L"
                    } else {
                        righty = numbers[i]
                        s += "R"
                    }
                } else if (Math.abs(numbers[i] - lefty) < Math.abs(numbers[i] - righty)) {
                    lefty = numbers[i]
                    s += "L"
                } else {
                    righty = numbers[i]
                    s += "R"
                }
            } else if (arr.includes(lefty) || arr.includes(righty)) {
                if (arr.includes(lefty)) {
                    if (righty - 2 > numbers[i]) {
                        if (dis1(righty - 2, numbers[i]) === Math.abs(lefty - numbers[i]) / 3) {
                            if (hand === "left") {
                                lefty = numbers[i]
                                s += "L"
                            } else if (hand === "righty") {
                                righty = numbers[i]
                                s += "R"
                            }
                        } else if (dis1(righty - 2, numbers[i]) < Math.abs(lefty - numbers[i]) / 3) {
                            righty = numbers[i]
                            s += "R"
                        } else {
                            lefty = numbers[i]
                            s += "L"
                        }
                    } else {
                        if (dis2(numbers[i], righty - 2) === Math.abs(lefty = numbers[i] / 3)) {
                            if (hand === "left") {
                                lefty = numbers[i]
                                s += "L"
                            } else if (hand === "righty") {
                                righty = numbers[i]
                                s += "R"
                            }
                        } else if (dis2(numbers[i], righty - 2) < Math.abs(lefty = numbers[i] / 3)) {
                            righty = numbers[i]
                            s += "R"
                        } else {
                            lefty = numbers[i]
                            s += "L"
                        }
                    }
                } else {
                    if (lefty > numbers[i]) {
                        if (dis1(lefty, numbers[i]) === Math.abs(righty - numbers[i]) / 3) {
                            if (hand === "left") {
                                lefty = numbers[i]
                                s += "L"
                            } else if (hand === "righty") {
                                righty = numbers[i]
                                s += "R"
                            }
                        } else if (dis1(lefty, numbers[i]) < Math.abs(righty - numbers[i]) / 3) {
                            lefty = numbers[i]
                            s += "R"
                        } else {
                            righty = numbers[i]
                            s += "L"
                        }
                    } else {
                        if (dis2(numbers[i], lefty) === Math.abs(righty = numbers[i] / 3)) {
                            if (hand === "left") {
                                lefty = numbers[i]
                                s += "L"
                            } else if (hand === "righty") {
                                righty = numbers[i]
                                s += "R"
                            }
                        } else if (dis2(numbers[i], lefty) < Math.abs(righty = numbers[i] / 3)) {
                            lefty = numbers[i]
                            s += "R"
                        } else {
                            righty = numbers[i]
                            s += "L"
                        }
                    }
                }
            } else {
                if (lefty === righty - 2) {
                    if (hand === "right") {
                        righty = numbers[i]
                        s += "R"
                    } else if (hand === "left") {
                        lefty = numbers[i]
                        s += "L"
                    }
                } else {
                    if (Math.abs(numbers[i] - lefty) < Math.abs(numbers[i] - (righty - 2))) {
                        lefty = numbers[i]
                        s += "L"
                    } else {

                        righty = numbers[i]
                        s += "R"
                    }

                }
            }
        }

    }
    answer = s
    return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))


