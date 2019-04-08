// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/* my first solution O(n) */
function reverseInt(n) {
    if (n >= 0) {
        return Number(n.toString().split('').reverse().join(''));
    }
    return Number('-' + n.toString().replace('-', '').split('').reverse().join(''));
}


module.exports = reverseInt;

/* first solution given O(n)
function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    return Math.sign(n) * parseInt(reversed);
}
*/
