function vectorAffinity(xs,ys) {
    let minimumLength = Math.min(xs.length, ys.length)
    
    if (xs.length === 0 && ys.length === 0) {
        return 1;
    }
    
    
    if (minimumLength === 0) {
        return 0;
    }
    
    let matched = 0;
    
    for(let i  = 0 ; i < minimumLength; i++){
        if(xs[i]===ys[i]){
            matched++;
        }
    }
    
    return matched/minimumLength;
}
console.log(vectorAffinity([1, 2, 3, 4, 5], [1, 2, 5]));