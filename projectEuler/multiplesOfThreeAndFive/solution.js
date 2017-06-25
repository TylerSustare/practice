'use strict'
// std out time to run the solution
console.time('solution');
solution();
console.timeEnd('solution');

// the solution
function solution(){
        var sum = 0;
        for (var i = 0; i < 1000; i++){
                if(i % 3 === 0 || i % 5 === 0)
                        sum += i;
        }
        console.log(sum);
}
