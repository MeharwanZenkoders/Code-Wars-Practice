function parseInt(str) {

    const units = {
        "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
        "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10,
        "eleven": 11, "twelve": 12, "thirteen": 13, "fourteen": 14,
        "fifteen": 15, "sixteen": 16, "seventeen": 17, "eighteen": 18, "nineteen": 19
    };
    
    const tens = {
        "twenty": 20, "thirty": 30, "forty": 40, "fifty": 50,
        "sixty": 60, "seventy": 70, "eighty": 80, "ninety": 90
    };
    
    const scales = {
        "hundred": 100, "thousand": 1000, "million": 1000000
    };
    
    let words = str.replace(/-/g, ' ').split(' ');
    let number = 0;
    let current = 0;

    words.forEach(word => {
        if (units[word] !== undefined) {
            current += units[word];
        } else if (tens[word] !== undefined) {
            current += tens[word];
        } else if (scales[word] !== undefined) {
            current *= scales[word];
            if (scales[word] >= 1000) {
                number += current;
                current = 0;
            }
        }
    });

    return number + current;
}

console.log(parseIntFromString("one")); 
console.log(parseIntFromString("twenty")); 
console.log(parseIntFromString("two hundred forty-six")); 
console.log(parseIntFromString("seven hundred eighty-three thousand nine hundred and nineteen")); 
console.log(parseIntFromString("one million"));
