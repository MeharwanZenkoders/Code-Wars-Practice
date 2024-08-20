var number = function(busStops){
    // Good Luck!
    
    let peopleOnBus = 0;
    
    for(let i = 0; i < busStops.length; i++){
        
        peopleOnBus += busStops[i][0];
        peopleOnBus -= busStops[i][1];
        
    }
    
    return peopleOnBus;
  }
  
  let busStops = [[19, 0], [3, 6], [3, 10]];
  console.log(number(busStops));