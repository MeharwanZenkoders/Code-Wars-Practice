function solution(str){

    let result = [];
    
    for (let i = 0; i < str.length; i += 2) {
        let pair = str.substring(i, i + 2);
        result.push(pair.length === 1 ? pair + '_' : pair);
    }
    
    return result;
}

console.log(solution('abc'));    
console.log(solution('abcdef'));
