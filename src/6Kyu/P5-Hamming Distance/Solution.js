function hamming(a,b) {
	// Implement me!
  let count=0;
  for(let i = 0; i < a.length; i++){
    if(a[i]!==b[i]){
      count++;
    }
  }
  return count;
}

console.log(hamming("Expresso","espresso"))