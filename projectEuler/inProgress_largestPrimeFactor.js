/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143?
*/
'use strict'

// std out time to run the solution
console.time('solution');
solution(13195);
console.timeEnd('solution');
// version 1 solution
function solution(n){
  // find primes from 1 to n 
  var primes = [];
  // populate array ot apply Sieve of Eratosthenes
  // O(root N)
  for (var i = 2; (i * i) < n; i++){
    if(n % i == 0)
      primes.push(i);
  }

  var size = primes.length;
  for (var i = 0; i < size; i++){
    if(primes[i]){
      // remove multiples of i 
      for (var j = i; (i + j) < primes.length; j++){
        primes.splice(i + j, 1);
      }
    }
  }
  return primes;
}

console.log('answer: ' +  solution(13195));
