function solution(n) {
    let answerArr = 0
    
    for(let i=1; i <= n ; i++) {
       n % i === 0 ? answerArr++ : 0
    }
    
    return answerArr
}