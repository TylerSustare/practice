class Node{
    constructor(data){
        this.data = data;
        this.nextNode = null;
    }
    
    // O(1)
    setNextNode(node) {
        this.nextNode = node;
    }
}

module.exports =  class LinkedList {
        constructor(){
            this.head = null;
            /* fill it with stuff
            for(let i = 0; i < 5; i++){
                this.add(i);
            }
            */
        }
        
        nodeAtIndex(index){
            if(index == 0){
                return this.head;
            }
            let i = 0;
            let current = this.head;
            
            while(i < index){
                current = current.nextNode;
                i += 1;
            }
            // what if it's not in there?
            return current;
        }
        
        // O(1)
        setHead(node) {
            this.head = node;
        }   
        
        // O(1)
        isEmpty(){
            return this.head === null;
        }
        
        // O(n)
        size(){
            let current = this.head;
            let count = 0;
            
            while(current){
                count += 1;
                current = current.nextNode
            }
            return count;
        }
        
        // O(1)
        add(data){
            const n = new Node(data);
            n.setNextNode(this.head);
            this.head = n;
        }
        
        // O(n)
        insert(index, value){
            const n = new Node(value);
            let current = this.head;
            let i = 0;
            while(i <= index && current.nextNode !== null) {
                console.log(current)
                current = current.nextNode;
                i += 1;
            }
            if (current.nextNode === null){
                return false;
            } else {
                n.nextNode = current.nextNode;
                current.nextNode = n;
            }
        }
        
        // remove O(n);
        remove(index){
            let i = 0;
            let current = this.head;
            while(current || i <= index){
                if(i === index - 1){
                    current.nextNode = current.nextNode.nextNode;
                }
                i += 1;
                current = current.nextNode;
            }
        }
        
        // O(n)
        search(value){
            let current = this.head;
            let index = 0;
            while(current){
                if(value === current.data){
                    return index;
                }
                index += 1;
                current = current.nextNode;
            }
            return false;
        }
        
        // 0(n)
        print(){
            let current = this.head;
            while(current){
                if(current === this.head){
                    console.log(`[head:${current.data}]`);
                }else if(current.nextNode === null){
                    console.log(`[tail:${current.data}]`);
                }else{
                    console.log(`[${current.data}]`);
                }
                current = current.nextNode;
            }
        }
    }