function minMax(arr){
  
    if(arr.length === 1){
      return [arr[0],arr[0]]
    }
    let min = arr[0];
    let max = 0;
    for(let i = 0; i  < arr.length; i++){
        if(arr[i]  <= min){
            min = arr[i]
        }
        if(arr[i]  >= max){
            max = arr[i]
        }
        
    }
    
    
    
  return [min,max]; // fix me!
}

arr = [10,22,3,7,6,4,5,8,23] 
console.log(minMax(arr));