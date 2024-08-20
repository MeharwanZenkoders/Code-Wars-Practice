function descendingOrder(n){
  
    let numberInDescending = Number(n.toString().split('').sort().reverse().join(''));
    
    return numberInDescending;
   }
   
   console.log(descendingOrder(12358764)); //87654321