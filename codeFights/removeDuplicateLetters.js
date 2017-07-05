/*
    remove duplicate letters in a string
    input -> "hello"
    output -> "helo"
*/

// O(N) runtime 
// 3N space complexity
function removeDuplicateLetters(input){
    var letterObject = {}; // used as a vanilla js hash table/list structure 
    var output = '';

    for(var i = 0; i < input.length; i++){
        if(!letterObject[input[i]]){
            letterObject[input[i]] = 1;
            output.concat(input[i]);
        }
    }
    console.log(output);
    return output;
}

removeDuplicateLetters("hello");