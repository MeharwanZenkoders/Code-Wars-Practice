function validatePIN (pin) {
    //return true or false
    
    let len = pin.length;
    
    if(len!==4 && len!==6){
        return false;
    }
    for (let i = 0; i < len; i++){
        
        if(pin[i]>'9' || pin[i]<'0'){
            return false;
        }
        
    }
    return true;
  }