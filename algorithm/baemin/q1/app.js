function solution (arr) {
    var answer = -1;
    var zip = [];
    var cnt =0;
    var num =1;

    while(arr.length > 1) {
        for(var i=0; i<arr.length-1; ++i) {
            if (arr[i] === arr[i+1]) {
                ++num
            } else {
                zip.push(num);
                num =1;
            }
        }
        zip.push(num)
        num =1;
        console.log(zip)
        arr=zip
        zip = [];
        ++cnt
    
    }
    answer = cnt
    return answer
}

solution([1,2,3])