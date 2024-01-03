/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let ans = 0
    for (let i = 0;i<nums.length;i++) {
        ans = ans ^ i ^ nums[i]
    }
    return ans ^ nums.length
};
console.log(missingNumber([3,0,1]))
