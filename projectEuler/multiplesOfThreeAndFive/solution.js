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
