// std out time to run the solution
console.time('solution');
solution();
console.timeEnd('solution');

// the solution
function solution(){
        var sum = 0;
        var nums = [1,2];
        var i = 1;
        while (nums[i] < 4000000){
                nums.push(nums[i] + nums[i -1]);
                if(nums[i] % 2 == 0){
                        sum += nums[i];
                }
                i++;
        }
        console.log(sum);
}K
