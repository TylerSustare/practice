function recursiveBinarySearch(list, target, first = 0, last = list.length - 1) {
    const mid = Math.floor((first + last) / 2)
    if (list[mid] === target)
        return mid;
    if (first === last)
        return null;

    if (list[mid] < target)
        return recursiveBinarySearch(list, target, mid + 1, last);
    return recursiveBinarySearch(list, target, first, mid);
}

const a = recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9);

console.log(a !== null ? `position ${a}` : 'not found');
