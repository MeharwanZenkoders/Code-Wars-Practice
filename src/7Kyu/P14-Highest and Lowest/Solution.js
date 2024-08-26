function highAndLow(numbers){
    let arr = numbers.split(" ").map(Number);
    
    let min = arr[0];
    let max = 0;
     for(let i = 0; i < arr.length; i++){
         if(arr[i]  <= min){
              min = arr[i]
          }
          if(arr[i]  >= max){
              max = arr[i]
          }
    }
     return `${max} ${min}`
  }
  
  arr = [10,22,3,7,6,4,5,8,23] 
  console.log(minMax(arr));
  