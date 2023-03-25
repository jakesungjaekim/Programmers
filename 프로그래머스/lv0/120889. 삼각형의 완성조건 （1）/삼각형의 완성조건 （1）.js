function solution(sides) {
    let answer = 0;
    
    sides.sort()
    
    if (sides[0] + sides[1] <= sides[2]) {
        answer = 2
    } else if (sides[0] + sides[1] > sides[2] ) {
        answer = 1
    }
    return answer
}
