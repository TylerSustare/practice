// return new sorted list
const mergeSort = (list) => {
    // divide => midpiont of the list and divide into sub lists
    // conquer => recursively sort sublists created in previous step
    // combine => merge the sorted sublists

    if (!list || list.length <= 1){
        return list;
    }
    
    const {leftHalf, rightHalf} = split(list);
    const left = mergeSort(leftHalf);
    const right = mergeSort(rightHalf);
    
    return merge(left, right);
};
    
const split = (list) => {
    // divide the unsorted list at midpiont into sublists
    // return two sublists - {left, right}
    
    const mid = Math.floor(list.length / 2);
    const leftHalf = list.slice(0, mid);
    const rightHalf = list.slice(mid);
    return { leftHalf, rightHalf }
}
    
const merge = (left, right) => {
    // merges two arrays sorting them in process
    // returns new merged list
    const l = [];
    let i = 0;
    let j = 0;
    
    const rightLen = right.length || 0;
    const leftLen = left.length || 0;
        
    while (i < leftLen && j < rightLen){
        if (left[i] < right[j]){
            l.push(left[i]);
            i += 1;
        } else {
            l.push(right[j]);
            j += 1;
        }
    }
    // if left and right ore different lengths 
    while(i < leftLen){
        l.push(left[i]);
        i += 1;
    }
    while(j < rightLen){
        l.push(right[j]);
        j += 1;
    }
    
    return l;
}

const a = [1,3,5,2,4,0,-1]

const sorted  = mergeSort(a);
console.log(sorted);