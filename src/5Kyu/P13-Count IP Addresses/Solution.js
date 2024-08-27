function ipsBetween(start, end){
    
    function intoInt(ip){
        let octet = ip.split('.');
        let result = 0;
        
        for (let i =0; i < octet.length; i++){
            
            let cur = Number(octet[i]);
                
            result = (result * 256 ) + cur;
        }
        return result;
    }
    
    let startIp = intoInt(start);
    let endIp = intoInt(end);
  
    return endIp - startIp;
}
console.log('Difference ',ipsBetween("10.0.0.0", "10.0.0.50")); 