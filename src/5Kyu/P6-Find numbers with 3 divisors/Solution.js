function solution(n, m) {
    let result = [];
    
    for(let i=n; i <= m ; i++){
        
        let count = 0;
        
       
        
        for( let j = 2; j < i; j++){
            if(i % j === 0){
                count++;
            }
        }
        
        if(count === 3){
                 result.push(i)
            }
        
    }
    
    return result.sort((a, b) => a - b);
    
}
console.log(solution(625, 626));
