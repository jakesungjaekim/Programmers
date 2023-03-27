function solution(num_list) {
    let answer = 0;
    let answer_list = [0,0]; 
    
    for (let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 === 0){
            answer_list[0] += 1 
        } else if(num_list[i] % 2 === 1) {
            answer_list[1] += 1
        }
    }
    
    
    return answer_list;
}