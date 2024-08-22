function loop_size(node){
    
    if(!node) return 0;
    
    let slow = node;
    let fast = node;
    
    while(fast !== null && fast.getNext() !== null){
        slow = slow.getNext();
        fast = fast.getNext().getNext();
        
        if(slow==fast){
    
            let len = 0;
            let cur = slow;
            
            do{
                
                cur = cur.getNext();
                len++;
                
            } while(cur !== slow);
            
            return len
        }
    }
    return -1;
}
