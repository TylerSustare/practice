/*
  A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
  Find the largest palindrome made from the product of two 3-digit numbers.
*/
'use strict'

// std out time to run the solution
console.time('first solution');
solutionFirst(998001);
console.timeEnd('first solution');

// version 1 solution
function solutionFirst(n){
  var result = {pal:0, num1:0, num2:0};
  for(var i = n; i > 0; i--){
    if(isPalindrome(i)){
      var j = 999;
      while(i/j < 999){
        if(i % j === 0){
          result.pal = i;
          result.num1 = j;
          result.num2 = i/j;
          return result;
        }
        j--;
      }
    }
  }
}

// isPalindrome() subroutine
function isPalindrome(intInput){
  var strInput = intInput.toString();
  var i = 0;
  var j = strInput.length -1;
  while (i < j){
    if(strInput[i] != strInput[j])
      return false;
    i++;
    j--;
  }
  return true;
}

/*
console.time('optimal solution');
solutionOptimal ();
console.timeEnd('optimal solution');

// optimal solutoin
function solutionOptimal(){
}
*/


console.log('answer: ' +  JSON.stringify(solutionFirst(998001)));
