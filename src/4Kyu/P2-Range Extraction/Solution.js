function solution(arr) {
    if (arr.length === 0) return '';

    let result = '';
    let start = arr[0];
    let end = arr[0];


    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === end + 1) {
            end = arr[i];
        } else {
            if (end - start >= 2) {
                result += start + '-' + end + ',';
            } else if (end > start) {
                result += start + ',' + end + ',';
            } else {
                result += start + ',';
            }
            start = end = arr[i];
        }
    }

    if (end - start >= 2) {
        result += start + '-' + end;
    } else if (end > start) {
        result += start + ',' + end;
    } else {
        result += start;
    }

    return result;
}

// Example usage:
console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));

