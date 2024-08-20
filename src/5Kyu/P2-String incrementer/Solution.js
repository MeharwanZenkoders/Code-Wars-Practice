function incrementString(strng) {

    let numbersInString = "";
    let stringPart = "";
    let i = strng.length - 1;
    
    if(strng[i] >= 'a' && strng[i] <= 'z'){
      return strng + '1';
    }
  
    while (i >= 0 && !isNaN(strng[i])) {
      numbersInString = strng[i] + numbersInString;
      i--;
    }
    
    stringPart = strng.substring(0, i + 1);
  
    let incrementedNumber = (parseInt(numbersInString) + 1).toString();
  
    let zeroPadding = numbersInString.length - incrementedNumber.length;
    if (zeroPadding > 0) {
      incrementedNumber = '0'.repeat(zeroPadding) + incrementedNumber;
    }
    
    return stringPart + incrementedNumber;
  }