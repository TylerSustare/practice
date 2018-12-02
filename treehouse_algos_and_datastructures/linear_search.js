// returns index position of the target if found, else return null
function linear_search(list, target) {
  for (let i = 0; i < list.length; i++){
    if (list[i] === target){
        return i;
    }
  }
  return null;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

result = linear_search(numbers, 2)
function verify(result){
    result !== null ? console.log(result) : console.log
}
verify(result);