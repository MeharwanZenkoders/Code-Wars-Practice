function zeros (n) {
    let count = 0;          
    let powerOfFive = 5;    

    while (n >= powerOfFive) {
        count += Math.floor(n / powerOfFive); 
        powerOfFive *= 5;                     
    }

    return count; 
}


console.log(zeros(6));   
console.log(zeros(12));  
console.log(zeros(100)); 
