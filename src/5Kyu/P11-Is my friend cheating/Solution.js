function removNb(n) {
    
    const sum = (n * (n + 1)) / 2;
    
    let result = [];

    for (let a = 1; a <= n; a++) {
        
        const b = (sum - a) / (a + 1); 
        // a*b = sum - a - b => a*b+a+b = sum => (a+1)(b+1) =sum+1 => b = sum-a/a+1
        if (b <= n && Number.isInteger(b)) {
            result.push([a, b]);
        }
    }

    return result;
}

console.log(removNb(26));
