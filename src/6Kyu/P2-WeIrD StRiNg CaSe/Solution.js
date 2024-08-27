function toWeirdCase(str){
  //TODO
  console.log(str.length);
  let result = "";
  let count = 0;
  for(let i = 0; i<str.length; i++){
      
    if(count%2===0){
        console.log(i)
        result+=str[i].toUpperCase();
    }
    else{
        result += str[i].toLowerCase();
    }
    
    if(str[i] === ' '){
        count=0;
    }else{
        count++;
    }
  }
  
  
  return result;
}
console.log(toWeirdCase("Weird string case"));
