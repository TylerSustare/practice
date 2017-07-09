/* 
  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
'use strict'

// std out time to run the solution
console.time('solution');
solution(20);
console.timeEnd('solution');

// version 1 solution -> more of a brute force approach testing every number
function solution(n){
  var isDiv = 0;
  var result = 1; // start at one to make first condition false. 
  while(isDiv < n/2){
    for(var i = n; i > n/2; i--){
      if(result % i != 0){
        isDiv = 0;
        break;
      } else {
        isDiv++;
      }
    }
    result++;
  }
  return result -1; // to offset the first condition

}

//console.log('answer 1: ' +  JSON.stringify(solution(20)));

// per projecteuler.net optimal solution calls for an array of primes