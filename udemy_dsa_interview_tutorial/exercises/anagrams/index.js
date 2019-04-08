// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

module.exports = anagrams;

// my first
/*
function anagrams(stringA, stringB) {
    // clean strings
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
    if (stringA.length !== stringB.length) {
        return false;
    }
    const dictionaryA = {};
    const dictionaryB = {};
    for (let char of stringA) {
        dictionaryA[char] ? dictionaryA[char] += 1 : dictionaryA[char] = 1;
    }
    for (let char of stringB) {
        dictionaryB[char] ? dictionaryB[char] += 1 : dictionaryB[char] = 1;
    }
    for (let obj in dictionaryA) {
        if (dictionaryA[obj] !== dictionaryB[obj]) {
            return false;
        }
    }
    return true;
}
*/

// their solution
// function anagrams(stringA, stringB) {
//     const mapA = buildCharMap(stringA);
//     const mapB = buildCharMap(stringB);

//     if (Object.keys(mapA).length !== Object.keys(mapB).length) {
//         return false;
//     }

//     for (let key in mapA) {
//         if (mapA[key] !== mapB[key]) {
//             return false
//         }
//     }
//     return true;
// }

// function buildCharMap(str) {
//     const charMap = {};
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

// their second and my favorite
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
