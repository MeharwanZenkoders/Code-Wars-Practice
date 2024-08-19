Compiler
function createArrayOfTiers(num) {
    
    str = num.toString();
    
    len = str.length;
    
    let arr = [];
    
    for(let i = 0; i<len; i++){
        
        arr[i] = str.substring(0,i+1);
    }
    
    return arr;
}