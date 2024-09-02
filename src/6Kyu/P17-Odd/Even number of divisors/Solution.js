function oddity(n) {
  
    let sqrt = Math.sqrt(n);
    if (Number.isInteger(sqrt)) {
        return "odd";
    }
    return "even";
}

console.log(oddity(12));
console.log(oddity(4));  
console.log(oddity(17));