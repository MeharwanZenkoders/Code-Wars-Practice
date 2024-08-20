function friend(friends){
    //your code here
    let fr = [];
    for(let i=0; i < friends.length; i++){
        
        if(friends[i].length === 4){
            fr.push(friends[i])
        }
    }
    
    return fr;
  }
  
  console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));