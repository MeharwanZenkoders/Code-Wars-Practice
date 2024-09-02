function numbersOfLetters(num) {
    const digitToWord = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    function toWord(n) {
        let word = "";
        const numStr = n.toString();

        for (let i = 0; i < numStr.length; i++) {
            const digit = numStr[i];
            word += digitToWord[digit];
        }

        return word;
    }

    const result = [];
    let word = toWord(num);
  
    console.log(word);

    while (!result.includes(word)) {
        result.push(word);
        if (word.length < 10) {
            word = digitToWord[word.length];
        } else {
            word = toWord(word.length);
        }
    }

    return result;
}

console.log(numbersOfLetters(60)); 
console.log(numbersOfLetters(1));  
