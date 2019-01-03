// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* my first solution O(n)
function reverse(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result;
}
*/

/* my second solution O(n/2) + O(.join(''))*/
function reverse(str) {
    const arr = []
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        arr[i] = str[str.length - 1 - i];
        arr[str.length - 1 - i] = str[i];
    }
    return arr.join('');
}

module.exports = reverse;

/************ tutorial answers *************/
/* first solution O(n), maybe quicker with reverse
function reverse(str) {
    return str.split('').reverse().join('');
}
*/

/* second solution O(n)
function reverse(str) {
    let reversed = '';
    for (let char of str) { // neat ES6 forEach in a string
        reversed = char + reversed;
    }
    return reversed;
}
*/

/* third solution 
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}
*/
