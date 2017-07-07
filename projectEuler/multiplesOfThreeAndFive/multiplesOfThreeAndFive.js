/*
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
  Find the sum of all the multiples of 3 or 5 below 1000.
*/
'use strict'

// std out time to run the solution
console.time('first solution');
solutionOne();
console.timeEnd('first solution');
function solutionOne(){
  var limit = 999;
  var sum = 0;
  for(var i = 0; i < limit; i++){
    if(i % 3 === 0 || i % 5 === 0)
      sum += i;
  }	
}

// std out time to run the solution for comparison
console.time('optimal solution');
solutionOptimal();
console.timeEnd('optimal solution');

function sumDivisibleBy(n, limit){
  var p = limit / n;
  return n * (p * (p+1)) / 2;
  // ex
  // var p = 99 / 3;
  // return 3 * (33 * (34)) / 2;
}

// the solution
function solutionOptimal(){
  var limit = 999;
  var sum = 0;
  sum = sumDivisibleBy(3, limit) + sumDivisibleBy(5, limit) - sumDivisibleBy(15, limit);
  return sum;
}

// answer 
console.log('answer: ' + solutionOptimal());
