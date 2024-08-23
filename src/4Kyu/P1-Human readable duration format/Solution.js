function formatDuration (seconds) {
    // Complete this function\
    
    if(seconds === 0){
        return "now";
    }
    
     const units = [
          { name: "year", value: 31536000 },
          { name: "day", value: 86400 },
          { name: "hour", value: 3600 },
          { name: "minute", value: 60 },
          { name: "second", value: 1 }
      ];
      
      parts = [];
      
      for(let unit of units){
          let count = Math.floor(seconds/unit.value);
          
          if(count > 0){
              parts.push(count + " " + unit.name + (count>1 ? "s":""));
              
              seconds = seconds - (count * unit.value);
          }
      }
    }