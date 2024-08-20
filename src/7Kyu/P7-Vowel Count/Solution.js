function getCount(str) {
  
    let count = 0;
    const vowels = 'aeiou';
  
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    
    return count;
  }

  let str = "Hi, Meharwan!";
  console.log(getCount(str));