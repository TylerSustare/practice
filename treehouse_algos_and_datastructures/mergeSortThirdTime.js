// merge sort all alone
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

const split = list => {
    const mid = Math.floor(list.length / 2); 
    const leftHalf = list.slice(0, mid);
    const rightHalf = list.slice(mid, list.length);
    return {leftHalf, rightHalf}
}

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

const list = [0, 2, 4, 6, 1, 3, 5, -1]
const sorted = mergeSort(list);
console.log(sorted);