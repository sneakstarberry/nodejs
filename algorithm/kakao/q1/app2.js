function solution(numbers, hand) {
    var answer = '';
    var s = '';
    var lefty = 10;
    var righty = 12;

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            numbers[i] = 11
        }
    }

    function disL(number, handy) {
        if (Math.abs(number - handy) === 0) {
            return 0
        } else if (Math.abs(number - handy) === 1) {
            return 1
        } else if (Math.abs(number - handy) === 2) {
            return 2
        } else if (Math.abs(number - handy) === 3) {
            return 1
        } else if (Math.abs(number - handy) === 4) {
            return 2
        } else if (Math.abs(number - handy) === 5) {
            return 3
        } else if (Math.abs(number - handy) === 6) {
            return 2
        } else if (Math.abs(number - handy) === 7) {
            return 3
        } else if (Math.abs(number - handy) === 8) {
            return 4
        } else if (Math.abs(number - handy) === 9) {
            return 3
        } else if (Math.abs(number - handy) === 10) {
            return 4
        }
    }
    
    function disR(number, handy) {
        if(Math.abs(number - handy) === 0) {
            return 0
        } else if (Math.abs(number - handy) === 1){
            return 1
        } else if (Math.abs(number - handy) === 2){
            return 2
        } else if (Math.abs(number - handy)=== 3){
            return 1
        } else if (Math.abs(number - handy) === 4){
            return 2
        } else if (Math.abs(number - handy) === 5) {
            return 3
        } else if (Math.abs(number - handy) === 6) {
            return 2
        } else if (Math.abs(number - handy) === 7) {
            return 3
        } else if (Math.abs(number - handy) === 8) {
            return 4
        } else if (Math.abs(number - handy) ===9) {
            return 3
        } else if (Math.abs(number - handy) === 10) {
            return 4
        }
    }

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            lefty = numbers[i];
            s += "L";
        } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            righty = numbers[i];
            s += "R";
        } else {
            if (disL(numbers[i], lefty) === disR(numbers[i], righty )) {
                if (hand === "left") {
                    lefty = numbers[i];
                    s += "L"
                } else if (hand ==="right"){
                    righty = numbers[i];
                    s += "R"
                }
            } else if (disL(numbers[i], lefty) < disR(numbers[i], righty)) {
                lefty = numbers[i];
                s += "L"
            } else {
                righty = numbers[i];
                s += "R"
            }
        }
    }
    answer = s
    return answer
}

