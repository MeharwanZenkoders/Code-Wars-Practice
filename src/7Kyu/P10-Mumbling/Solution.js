function accum(s) {
	// your code
    let finalResult=[];
    for(let i = 0; i < s.length; i++){
        let result = "";
        for(let j = 0; j < i+1; j++){
              if(j===0){
                result += s[i].toUpperCase();
              }
              else{
                result += s[i].toLowerCase();
              }
        }
        finalResult.push(result);
    }
    return finalResult.join('-');
}
let s = "abcd";
console.log(accum(s));