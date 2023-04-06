function solution(n) {
   let resultArr = []
    
    for(let i = 1; i <= n ; i++) {
        if( i % 2 === 1) {
            resultArr.push(i)
        }
    }
    
    return resultArr
}
