// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

module.exports = steps;

// my first
/*
function steps(n) {
    // array of strings
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            if (j <= i) {
                str += '#';
            }
            else {
                str += ' ';
            }
        }
        console.log(str)
    }
}
*/

// their first
/*
function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';
        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            }
            else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}
*/

// their second. It's recursive, but not neccesarily better
function steps(n, row = 0, stair = '') {
    if (row === n) {
        return;
    }
    // end of the row
    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    const charToAdd = stair.length <= row ? '#' : ' ';
    // use string with new length in the next call
    return steps(n, row, stair + charToAdd);
}
