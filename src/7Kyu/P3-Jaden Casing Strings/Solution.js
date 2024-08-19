String.prototype.toJadenCase = function () {
    let result = ""; // Store the final result
    
    for (let i = 0; i < this.length; i++) {
        
      if(i===0){
          
          result += this.charAt(i).toUpperCase();
          
      }else if(this.charAt(i)=== ' '){
          
          result += this.charAt(i);
          i++;
          result += this.charAt(i).toUpperCase();
          
      }else{
          
          result += this.charAt(i);
      
      }
    }
    return result;
};

let quote = "how can mirrors be real if our eyes aren't real";
console.log(quote.toJadenCase());