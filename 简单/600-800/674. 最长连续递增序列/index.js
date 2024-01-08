/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    const dp = [1]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i]>nums[i-1])  {
            dp.push(dp[i-1] + 1)
        } else {
            dp.push(1)
        }
    }
    return Math.max(...dp)
};
