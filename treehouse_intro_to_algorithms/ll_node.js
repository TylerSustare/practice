module.exports =  class Node {
        constructor(data){
            this.data = data;
            this.nextNode = null;
        }
        
        setNextNode(node) {
            this.nextNode = node;
        }
    }