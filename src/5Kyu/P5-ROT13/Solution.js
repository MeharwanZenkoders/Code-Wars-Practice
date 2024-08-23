function rot13(str) {
    let result = "";
    
    for (let i = 0; i<str.length; i++){
        let letter = str[i];
        let unicode = str.charCodeAt(i);
        
        if(letter >= 'A' && letter <= 'Z'){
            
            if(unicode+13 > 90){
                result += String.fromCharCode(unicode -13);
            }
            else{
                result += String.fromCharCode(unicode + 13);
            }
        }
        else if(letter >= 'a' && letter <= 'z'){
            if(unicode+13 > 122){
                result += String.fromCharCode(unicode -13);
            }
            else{
                result += String.fromCharCode(unicode + 13);
            }
        }
        else{
            result += letter;
        }
    }
    return result;
}