/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143?
*/

'use strict'

// std out time to run the solution
console.time('first solution');
solutionFirst();
console.timeEnd('first solution');
// version 1 solution
function solutionFirst(n){
  // find primes from 1 to n 
  var primes = [];
  // populate array ot apply Sieve of Eratosthenes
  // O(root N)
  for (var i = 0; (i * i) < n; i++){
    primes.push(i);
  }
  
  for (var i = 0; i < primes.length; i++){

  }
}

/*
console.time('optimal solution');
solutionOptimal ();
console.timeEnd('optimal solution');

// optimal solutoin
function solutionOptimal(){
}
*/

console.log('answer: ' + solutionFirst());
