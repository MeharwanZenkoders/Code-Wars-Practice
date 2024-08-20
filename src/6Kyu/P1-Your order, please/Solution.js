function order(str){
    
    if(str === '') {
        return '';
    }
    
    words = str.split(' ');
    let result = []; 
  
    
    for (let i = 0; i < words.length; i++) {
      result.push('');
    }
  
    for (let word of words) {
      let number = parseInt(word.match(/\d/)[0]); 
      result[number - 1] = word; 
    }
  
    return result.join(' ');
  }
  
  
  console.log(order("is2 Thi1s T4est 3a")); 
    