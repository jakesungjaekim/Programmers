function solution(array, height) {
    
    count = 0
  	let i = 0
  	while(i < array.length ) { 
		if(height < array[i]) {
            count += 1
        }
        i += 1
    }
    return count
}

    