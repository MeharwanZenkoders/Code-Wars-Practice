function findOdd(A) {
    //happy coding!
    let count=0;
  
    for(let i=0; i<A.length; i++){
      for(let j=0; j<A.length; j++){
        if(A[i]===A[j]){
            count++;
        }
      }
      if((count % 2) !== 0){
          return A[i];
      }
      else{
          count=0;
      }
    }
    return 0;
  }
  
  A=[1,2,2,3,3,3,4,3,3,3,2,2,1]
  
  console.log(findOdd(A))