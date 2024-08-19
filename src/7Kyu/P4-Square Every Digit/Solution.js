function squareDigits(num){
  
    let str = num.toString();
    
    
    let len = str.length;
    
    result = "";
    
    for(let i = 0; i < len; i++){
        let digit = parseInt(str.charAt(i));
        result += (digit * digit).toString();
        
    }
    
    sqared = parseInt(result)
    
    return sqared;
  }
  
  
  console.log(squareDigits(9119))