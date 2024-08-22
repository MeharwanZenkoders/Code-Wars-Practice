function pickPeaks(arr){
    
    let pos = []
    let peak = []
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
            pos.push(i);
            peak.push(arr[i]);
        }
        else if( arr[i]>arr[i-1] && arr[i]===arr[i+1]){
            let plateau = i;
            
            while(plateau-1 < arr.length && arr[plateau+1] === arr[i]){
                plateau++;
            }
            if(plateau < arr.length-1 && arr[i] > arr[plateau+1]){
                pos.push(i);
                peak.push(arr[i]);
            }
            i=plateau;
        }
    }
   return {pos:pos,peaks:peak}
}
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])); // { 