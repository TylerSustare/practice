// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

module.exports = capitalize;
// my first
function capitalize(str) {
    let capResult = '';
    for (let i = 0; i < str.length; i++) {
        i === 0 || str[i - 1] === ' ' ?
            capResult += str[i].toUpperCase() :
            capResult += str[i];
    }
    return capResult;
}

// their first
/*
function capitalize(str) {
    const cap = [];
    const sentence = str.split(' ');
    for (word of sentence) {
        let first = word[0].toUpperCase();
        let rest = word.slice(1); // get the rest of the string
        cap.push(`${first}${rest}`)
    }
    return cap.join(' ');
}
*/

// thier second
/*
function capitalize(str) {
    let capResult = '';
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            capResult += str[i].toUpperCase();
        }
        else if (str[i - 1] === ' ') {
            capResult += str[i].toUpperCase();
        }
        else {
            capResult += str[i];
        }
    }
    return capResult;
}
*/
