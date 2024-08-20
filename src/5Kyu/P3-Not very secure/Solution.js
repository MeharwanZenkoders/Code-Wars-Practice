function alphanumeric(str) {

    if (str.length === 0) {
        return false;
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (!(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z') && !(char >= '0' && char <= '9')) {
            return false;
        }
    }

    return true;
}


console.log(alphanumeric("a"));
console.log(alphanumeric("abc 123"));

