/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// one pass hash
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
}

/* two pass hash
var twoSum = function(nums, target) {
    const a = new Map();
    for(let i = 0; i < nums.length; i++){
        a.set(nums[i], i);
    }
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if(a.has(complement) && a.get(complement) !== i){
            return [i, a.get(complement)];
        }
    }
};
*/
