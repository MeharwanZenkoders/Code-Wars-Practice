function firstNonRepeatingLetter(s) {
    // Add your code here
    if(s.length===0){
      return "";
    }
    
    let lower = s.toLowerCase();
    
    for(let i=0; i<lower.length; i++){
      let count = 0;
      for(j=0; j<lower.length; j++){
          
        if(lower[i]===lower[j]){
          count++;
        }
      }
      if(count===1){
        return s[i];
      }
      count = 0;
    }
    return '';
  }
  console.log("Result", firstNonRepeatingLetter("streSS"));