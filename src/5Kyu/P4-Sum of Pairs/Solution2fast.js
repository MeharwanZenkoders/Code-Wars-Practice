function sumPairs(ints, s) {
    const seenNumbers = new Map();
    let currentNumber = 0;
    let complement = 0;
    for (let i = 0; i < ints.length; i++) {
        currentNumber = ints[i];
        complement = s - currentNumber;
        
        if (seenNumbers.has(complement)) {
            return [complement, currentNumber];
        }
        
        seenNumbers.set(currentNumber, i);
    }
    

    return undefined;
}


console.log(sumPairs([1, 2, 3, 4, 5, 6], 10)); 
