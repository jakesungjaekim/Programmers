function solution(my_string, n) {
    let resultLength = (my_string.length - n);
    let answer = [];
    
    for(let i = resultLength; i < my_string.length ; i++) {
        answer.push(my_string[i])    
    }
    
    return answer.join('');
}