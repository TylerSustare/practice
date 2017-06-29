'use strict'
// std out time to run the solution
console.time('first solution');
solutionFirst();
console.timeEnd('first solution');

console.time('optimal solution');
solutionOptimal ();
console.timeEnd('optimal solution');
// version 1 solution
function solutionFirst(){
  var sum = 0;
  var a = 1;
  var b = 2;
  var c = 0;
  while (b < 400000000000000){
    if(b % 2 === 0)
      sum += b;
    c = a + b;
    a = b;
    b = c;
  }
  return sum;
}

// optimal solutoin
function solutionOptimal(){
  var sum = 0;
  // every third fibonacci number is even
  // 1 1 2 3 5 8 13 21 34 55 89 144
  var a = 1;
  var b = 1;
  var c = a + b;
  while (c < 400000000000000){
    sum += c;
    a = b + c;
    b = c + a;
    c = a + b;
  }
  return sum;
}

console.log('answer: ' + solutionOptimal());
