/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0, num = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (num === nums[i]) {
            count ++
        } else if (num !== nums[i]) {
            count --
            if (count < 0) {
                count = -count
                num = nums[i]
            }
        }
    }
    return num
};
