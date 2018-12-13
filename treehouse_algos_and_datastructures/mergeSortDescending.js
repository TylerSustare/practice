// merge sort outside of treehouse tutorial
const mergeSort = list => {
    // divide: find midpoint of the list
    // conquer: recursively break up lists into sublists until one itemd
    // merge: bring sublists together, sorting in the process
    if(!list || list.length <= 1){
        return list;
    }
    
    // divide 
    const {leftHalf, rightHalf} = split(list);
    // conquer
    const left = mergeSort(leftHalf);
    const right = mergeSort(rightHalf);
    
    // merge
    return merge(left, right);
}

// returns object with 2 new arrays
const split = list => {
    const mid = Math.floor(list.length / 2);
    const leftHalf = list.slice(0, mid);
    const rightHalf = list.slice(mid);
    return { leftHalf, rightHalf }    
}

// returns new array of 
const merge = (left, right) =>{
    const list = [];
    let i = 0;
    let j = 0;
    
    // left should be sorted && right should be sorted
    while(i < left.length && j < right.length){
        if(left[i] > right[j]){
            list.push(left[i]);
            i +=1;
        } else {
            list.push(right[j])
            j +=1;            
        }
    }
        // if left or right are longer
        while(j < right.length){
            list.push(right[j])
            j +=1;            
        }
        while(i < left.length){
            list.push(left[i])
            i +=1;            
        }
    
    return list;
}

const a = [1,3,5,2,4,0,-1]

const sorted  = mergeSort(a);
console.log(sorted);
