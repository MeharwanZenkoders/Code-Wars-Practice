function isAlt(word) {
    // happy codinggg
    function isVowel(alphabet){
        if(alphabet === 'a' || alphabet === 'e' || alphabet === 'i' || alphabet === 'o' || alphabet === 'u'){
            
            return true;
        }
        else{
            return false;
        }
        
    }
    
    for(let i =0; i< word.length - 1; i++){
        
        if(isVowel(word[i]) && isVowel(word[i+1])){
            return false;
        }
        else if(!isVowel(word[i]) && !isVowel(word[i+1])){
            return false;
        }
    }
    return true;
  }
  
  console.log(isAlt("amazon"));  // true
  console.log(isAlt("apple"));   // false