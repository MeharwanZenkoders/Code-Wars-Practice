function goodVsEvil(good, evil){
  
    const goodWorth = [1, 2, 3, 3, 4, 10];  
     const evilWorth = [1, 2, 2, 2, 3, 5, 10]; 
   
   
   let goodCount = 0;
   let evilCount = 0;
   
   let goodArray = good.split(' ').map(Number);
   let evilArray = evil.split(' ').map(Number);
   
   for(let i=0; i < goodArray.length; i++){
       goodCount += goodArray[i] * goodWorth[i];
   }
   
   for(let i=0; i < evilArray.length; i++){
       evilCount += evilArray[i] * evilWorth[i];
   }
    
    if(goodCount > evilCount){
        return "Battle Result: Good triumphs over Evil";
    }
    else if(goodCount <  evilCount){
        return "Battle Result: Evil eradicates all trace of Good";
    }
    else{
        return "Battle Result: No victor on this battle field"
    }
 
 }
 console.log(goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0"));
 