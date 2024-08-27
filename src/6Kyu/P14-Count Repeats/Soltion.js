function countRepeats(str) {
    let count = 0;
    for(let i = 1; i < str.length; i++){
        if(str[i] === str[i-1]){
            count++;
        }
    }
    console.log(count);
    
    return count;
}
countRepeats('ab cca')