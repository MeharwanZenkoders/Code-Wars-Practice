function digPow(n, p){

    const digits = n.toString().split('').map(Number);

    let sum = 0;
    for(let i = 0; i < digits.length; i++){
        sum += Math.pow(digits[i], p + i);
    }
    if(sum % n === 0){
        return sum / n;
    } 
    else{
        return -1;
    }
}

console.log(digPow(89, 1));
