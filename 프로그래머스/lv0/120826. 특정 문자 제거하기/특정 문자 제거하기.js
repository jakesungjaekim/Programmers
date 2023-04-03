function solution(my_string, letter) {

    let arrayStr = my_string.split('')
    let answer = []
    
    for(let i = 0; i < arrayStr.length; i++) {
        if(arrayStr[i] === letter) {
            continue
        } else {
            answer.push(arrayStr[i])
        }
    }
    
    return answer.join('');
}