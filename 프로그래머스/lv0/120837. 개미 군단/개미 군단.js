function solution(hp) {
    let numberOfGeneral = Math.floor(hp / 5)
    hp %= 5
    
    let numberOfKnight = Math.floor(hp / 3 )
    hp %= 3
    
    let numberOfWorker = Math.floor(hp / 1)
    
    return numberOfGeneral + numberOfKnight + numberOfWorker
}