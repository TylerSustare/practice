const LinkedList = require("./linked_list");

// return a sorted linkedList
const mergeSort = (list) => {
    if (list.size() === 1 || !list.head) {
        return list;
    }
    const { leftHalf, rightHalf } = split(list) // divide
    const left = mergeSort(leftHalf);
    const right = mergeSort(rightHalf);

    return merge(left, right);
}

// divide unsorted linked list at midpoint into sublists
// O(k log n) because of finding mid point
const split = (list) => {
    let leftHalf;
    let rightHalf;
    if (!list || !list.head) {
        leftHalf = list;
        rightHalf = null;

        return { leftHalf, rightHalf };
    }
    const size = list.size();
    const mid = Math.floor(size / 2);

    const midNode = list.nodeAtIndex(mid - 1); // because size ! 0 indexed

    leftHalf = list;
    rightHalf = new LinkedList();
    rightHalf.head = midNode.nextNode;
    midNode.nextNode = null;

    return { leftHalf, rightHalf };
}

// merge two linked lists, sorting by data in the nodes
// returns a new, merged list
// O(n)
const merge = (left, right) => {
    // create a new linked list that contains nodes from merging left to right
    const merged = new LinkedList();
    // fake head to be replaced
    merged.add(0);

    let current = merged.head;

    // head nodes for left and right lists
    let leftHead = left.head;
    let rightHead = right.head;

    // itterate over left and right until we reach tail node of either
    while (leftHead || rightHead) {
        if (!leftHead) {
            current.nextNode = rightHead;
            // call next on right to set loop condition to false
            rightHead = rightHead.nextNode;
        }
        // if head node of right is null, we're past the tail
        // add the node from left to merged list
        else if (!rightHead) {
            current.nextNode = leftHead;
            // call next on left to set loop condidtion to false
            leftHead = leftHead.nextNode;
        }
        else {
            // not at either tail node
            // obtain data to perform copmarison operation
            const leftData = leftHead.data;
            const rightData = rightHead.data;

            if (leftData < rightData) {
                current.nextNode = leftHead;
                leftHead = leftHead.nextNode;
            }
            else {
                current.nextNode = rightHead;
                rightHead = rightHead.nextNode;
            }
        }
        current = current.nextNode;
    }

    // discard fake head and set first merged node as head
    const head = merged.head.nextNode;
    merged.head = head;
    return merged;

}

const l = new LinkedList();
l.add(4);
l.add(32);
l.add(14);
l.add(20);

l.print();
console.log('_-----------_')
const sorted = mergeSort(l);
sorted.print();
