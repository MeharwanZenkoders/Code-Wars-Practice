const MOD = 1_000_000_007;

function digitwiseAddition(n, k) {
    
    let res=0;
    
    let str = n.toString();
    for(let j=0; j<k; j++){
        let result = "";
        for(let i = 0; i < str.length; i++){
            let digit = parseInt(str.charAt(i));
            result += (digit + 1).toString();
            
        }
        //console.log("Result", result)
        str=result;
        //console.log("Str = res", str)
        
        res=str.length % MOD
        
    }
    
    return res;
}



console.log(digitwiseAddition(91009,2));