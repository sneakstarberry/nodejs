class Genre {
    constructor(name){
        this.name = name
        this.total = 0
        this.song = []
    }
    
    add(num, count) {
        this.song.push(new Song(num, count));
        this.total += count
    }
    
}

class Song {
    constructor (num, count){
        this.num = num
        this.count = count
    }
}

function solution(genres, plays) {
    var answer = [];
    var arr =[];
    var check =[];

    genres.map(x => check.includes(x)? x: check.push(x));
    check.map(x=> arr.push(new Genre(x)));

    genres.map((x, i) => arr.map(y=> y.name === x ? y.add(i, plays[i]): y));

    for (var i=0; i<arr.length; i++) {
        arr[i].song.sort((a,b) => b.count - a.count)
    }
    arr.sort((a,b) => b.total - a.total)
    for (var i=0; i<arr.length; i++) {
        for(var j=0; j<2; j++) {
            if(arr[i].song.length < 2 && j === 1){
                continue
            } else {

                answer.push(arr[i].song[j].num)
            }
        }
    }
    console.log(answer)
    return answer;
}

solution(["classic", "pop", "classic", "classic", "pop", "hip"], [500, 600, 150, 800, 2500, 300])