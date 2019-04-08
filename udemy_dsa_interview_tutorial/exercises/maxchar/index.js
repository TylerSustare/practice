// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let character;
    for (let i = 0; i < str.length; i++) {
        // if charMap[str[i]] is falsy assign to 1
        charMap[str[i]] = charMap[str[i]] + 1 || 1;

        if (!charMap[character] || charMap[character] < charMap[str[i]]) {
            character = str[i];
        }
    }
    return character;
}

module.exports = maxChar;

// their solution
/*
function maxChar(str) {
    const charMap = {};
    let max = 0;
    let char = '';

    for (let c of str) {
        if (charMap[c]) {
            charMap[c]++;
        }
        else {
            charMap[c] = 1;
        }
    }

    for (let c in charMap) {
        if (charMap[c] > max) {
            max = charMap[c];
            char = c
        }
    }
    return char;
}
*/
