function perimeter(n) {
    
    let a = 1;
    let b = 1;
    let sum = a+b;
    
    if(n===0){
        return 4;
    }
    
    for(i=2;i<=n;i++){
        let next = a + b;
        sum+=next;
        a=b
        b=next;
    }
    
    
    return sum*4;
}
console.log("sum ", perimeter(0))