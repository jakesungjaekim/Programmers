function solution(my_string, n) {
   
   const answer = 
    [...my_string].map((element) => element.repeat(n));
    
   return answer.join('')
}