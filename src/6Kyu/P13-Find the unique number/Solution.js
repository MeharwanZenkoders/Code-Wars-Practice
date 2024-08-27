function findUniq(arr) {
    
    arr.sort( (a, b) => a - b );
    
    console.log(arr)
    
    if( arr[0] === arr[1] ){
        return arr[arr.length-1];
    }
    else{
        return arr[0]
    }
}
console.log(findUniq([ 1, 1, 1, 0.55, 1, 1 ]))
