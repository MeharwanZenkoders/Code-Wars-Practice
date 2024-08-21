function cuckooClock(inputTime, n) {
    // Write code
    
    let [hours, minutes] = inputTime.split(':').map(Number);
    
    function getHourChimes(hrs){
        if(hrs === 0){
            
            return 12
        }
        else{
            
            return hrs;
        }
    }
    
    let chimes = 0;
    
    while(chimes < n){
        
        if(minutes === 0){
            
            chimes += getHourChimes(hours)
            
            if(chimes >= n){
                
                let hourString = hours.toString();   
                
                if (hourString.length === 1) {
                    hourString = '0' + hourString;         
                }
                
                let formatedTime = hourString + ':00';
                
                return formatedTime;
            }
        }
        
        if(minutes%15 === 0 && minutes !== 0){
            
            chimes++;
            
            if(chimes >= n){
            
                let hourString = hours.toString();
                let minuteString = minutes.toString();
                
                if (hourString.length === 1) {
                    hourString = '0' + hourString;         
                }
                
                if (minuteString.length === 1) {
                    minuteString = '0' + minuteString;         
                }
                
                let formatedTime = hourString + ":" + minuteString
                
                return formatedTime;
            }
        }
        
        minutes+=1;
        if(minutes === 60){
            minutes = 0;
            hours = (hours % 12) + 1;
        }
       //console.log(minutes)
        
    }
}
console.log(cuckooClock("04:12", 21)); // 