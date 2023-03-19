function solution(numbers) {
    let answer = 0;
    let sortedNumbers = numbers.sort((a,b) => b-a);
    
    answer = sortedNumbers[0] * sortedNumbers[1]
    
    return answer;
}