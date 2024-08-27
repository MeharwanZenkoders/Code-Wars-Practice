function findMissingLetter(array){
    
    let code1 = array[0].charCodeAt(0)
    let code2 = array[array.length - 1].charCodeAt(0)

    
    let totalSum =0;
    let actualSum = 0;
    
    for(let i = code1; i <= code2; i++){
        totalSum += i;
    }
    
    for( let i = 0; i < array.length; i++){
        actualSum += array[i].charCodeAt(0);
    }
    let result =  String.fromCharCode(totalSum - actualSum);
    

    
  return result;
}


console.log(findMissingLetter(['a','b','c','d','f']))