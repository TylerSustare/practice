module.exports =  class LinkedList {
        constructor(){
            this.head = null;
        }
        
        setHead(node) {
            this.head = node;
        }
        
        isEmpty(){
            return this.head === null;
        }
        
        size(){
            let current = this.head;
            let count = 0;
            
            while(current){
                count += 1;
                current = current.nextNode
            }
            return count;
        }
    }