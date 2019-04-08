/*
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */

// first solution
var reverse = function(x) {
    let solution;
    if (x < 0) {
        x *= -1;
        solution = Number(`-${x.toString().split('').reverse().join('')}`);
    }
    else {
        solution = Number(x.toString().split('').reverse().join(''));
    }
    if (solution > Math.pow(2, 31) || solution < Math.pow(-2, 31)) {
        return 0;
    }
    return solution;
};

// second one
var reverse = function(x) {
    const reversed = x.toString().split('').reverse('').join('');
    const result = parseInt(reversed);
    if (result >= Math.pow(2, 31) || result <= Math.pow(-2, 31)) {
        return 0;
    }
    return Math.sign(x) * parseInt(reversed);
};
