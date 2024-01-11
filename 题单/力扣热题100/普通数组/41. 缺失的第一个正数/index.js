/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for(let i=0;i<nums.length;i++) {
        while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
            const tmp = nums[nums[i] - 1]
            nums[nums[i] - 1] = nums[i]
            nums[i] = tmp
        }

    }

    for(let i = 0;i<nums.length;i++) {
        if(nums[i] - 1 !== i) {
            return i + 1
        }
    }
    return nums.length + 1
};
