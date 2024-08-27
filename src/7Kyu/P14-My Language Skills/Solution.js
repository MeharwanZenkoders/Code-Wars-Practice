function myLanguages(results) {
    
    let passingValue = [];
    
    for(language in results){
        if(results[language] >= 60){
            passingValue.push({ language: language, score:results[language] });
        }
    }
    
    for( let i = 0; i < passingValue.length; i++){
        for(let j=0; j < passingValue.length; j++){
            
            if(passingValue[i].score > passingValue[j].score){
                
                let temp = passingValue[i]
                passingValue[i] = passingValue[j]
                passingValue[j] = temp;
            }
        }
    }
    
    let sortedArr = [];
    for (let i = 0; i < passingValue.length; i++) {
        
        sortedArr.push(passingValue[i].language);
    }
    return sortedArr;
}
myLanguages({"Java": 10, "Ruby": 80, "Python": 65})