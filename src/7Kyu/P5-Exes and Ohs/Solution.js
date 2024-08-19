function XO(str) {
  
    let cx = 0;
    let cy = 0;
    
    for(let i = 0; i < str.length; i++){
      
      if(str[i] === 'x' || str[i] === 'X'){
        cx++;
      }
      if(str[i] === 'o' || str[i] === 'O'){
        cy++;
      }
    
    }
    if(cx !== cy){
      return false;
    }else{
      return true;
    }
  }
  
  
  console.log(XO("c"))