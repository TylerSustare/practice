// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* my first solution O(n/2) */
function palindrome(str) {
    for (let i = 0; i < Math.floor(str.length); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}


module.exports = palindrome;

/* first solution from tutorial probably O(n)
function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
*/

/* second solution O(n) 
 * does twice the amount of work needed, given for example of something that works, but isn't the optimal solution. 
function palindrome(str) {
    return str.split('').every((char, i) => char === str[str.length - 1 - i]);
}
*/
