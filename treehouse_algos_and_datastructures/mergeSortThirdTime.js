// merge sort all alone
// runs O(kn log(n)) time
// runs in O(n) space since each sublist is not held in memory, but old lists go out of scope;
const mergeSort = list => {
    // divide
    // conquer
    // merge
    if (!list || list.length <= 1){
        return list
    }
    
    // divide
    const {leftHalf, rightHalf} = split(list);
    // conquer
    const left = mergeSort(leftHalf);
    const right = mergeSort(rightHalf);
    
    return merge(left, right);
}

// runs in O(k log(n)) time
// k because of the array.slice() method
const split = list => {
    const mid = Math.floor(list.length / 2); 
    const leftHalf = list.slice(0, mid);
    const rightHalf = list.slice(mid, list.length);
    return {leftHalf, rightHalf}
}

// runs in O(n) time
const merge = (left, right) => {
    const list = [];
    let i = 0;
    let j = 0;
    
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            list.push(left[i]);
            i += 1;
        } else {
            list.push(right[j]);
            j += 1;
        }
    }
    
    while(i <left.length){
        list.push(left[i])
        i += 1;
    }
    while(j <right.length){
        list.push(right[j])
        j += 1;
    }
    
    return list;
}

// recursively calls verify_sorted, comparing element 0 with element 1. modifying the array to remove the first element
const verify_sorted = list => {
    n = list.length;
    
    if(n === 0 || n === 1){
        return true
    }
    return (list[0] < list[1] && verify_sorted(list.splice(1, list.length)));
}

const list = [0, 2, 4, 6, 1, 3, 5, -1]
const sorted = mergeSort(list);
console.log(verify_sorted(list));
console.log(verify_sorted(sorted));