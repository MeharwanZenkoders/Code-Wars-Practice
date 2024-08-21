function pointsNumber(radius){
    // your code...
    
    let points = 0;
    let radiusSquare = radius * radius;
    
    for(let x = -radius; x <= radius; x++){
        for(let y = -radius; y <= radius; y++){
            if((x*x) + (y*y) <= radiusSquare){
                points++;
            }
        
        }
    }
    
    return points;
}
console.log(pointsNumber(2));
