function binarySearch(list, target){
    let first = 0;
    let last = list.length - 1;

    while(first <= last){
        let mid = Math.floor((first + last) / 2);
        if(list[mid] === target){
            return mid;
        }
        if(list[mid] < target){
            first = mid + 1;
        } else {
            last = mid -1;
        }
    }
    return null;
}

console.log(binarySearch([1,2,3,4,5,], 0));
