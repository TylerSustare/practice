// implement an algo to determine if a string has all unique characters.

// time O(n)
// extra space O(n)
const isUnique = (str) =>{
	const letters = new Set();
	for (let i = 0; i < str.length; i++){
		if(letters.has(str[i])){
			return false;
		}
		letters.add(str[i]);
	}
	return true;
}

// what if you cannot use additional data structures?

// time O(n log n)
// extra space O(1)
const isUniqueNoSet = (str) => {
	str = str.split('').sort();
	for (let i = 0; i < str.length; i++){
		if(str[i+1] && str[i] === str[i+1]){
			return false;
		}
	}
	return true;
}

console.log(isUniqueNoSet('sfoiewnm.,lzzzzzz'));
