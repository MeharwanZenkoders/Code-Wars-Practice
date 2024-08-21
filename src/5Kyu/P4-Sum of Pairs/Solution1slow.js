function sumPairs(ints, s) {
    let first = -1;
    let second = -1;
    
    for(let i = 0; i <ints.length; i++){
        for(let j = i+1; j <ints.length; j++){
            
            if(ints[i] + ints[j] === s){
                if(first === -1 && second === -1){
                    
                    first = i;
                    second = j;
                    
                }
                else if(second > j){
                    first = i;
                    second = j;
                }
            }
        }
    }
    
    if(first === -1 && second === -1){
        return undefined;
    }
    else{
        return [ints[first], ints[second]]
    }
}
console.log(sumPairs([1, 2, 3, 4, 5, 6], 10)); 