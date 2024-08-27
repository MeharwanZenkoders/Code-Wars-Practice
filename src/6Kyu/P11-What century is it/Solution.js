function whatCentury(year){
    
    years = parseInt(year);
    
    century = Math.ceil(years/100)
    console.log(century);

    if(century < 20){

        return century + "th"
    }
    else if(century % 10 === 1){

        return century + "st"
    }
    else if(century % 10 === 2){

        return century + "nd"
    }
    else if(century % 10 === 3){
        
        return century + "rd"
    }
    else{
        return century + "th"
    }
    return 0;
}

console.log(whatCentury(2823))