/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
    const n = nums.length;
    let ans = 0
    for (let a = 0; a <= n - 2 * k; a++) {
        let isFirst = true;
        for (let i = a; i < a + k - 1; i++) {
            if (nums[i] >= nums[i + 1]) {
                isFirst = false;
                break;
            }
        }
        if (!isFirst) continue;

        let isSecond = true;
        for (let i = a + k; i < a + 2 * k - 1; i++) {
            if (nums[i] >= nums[i + 1]) {
                isSecond = false;
                break;
            }
        }
        if (isSecond) {
            return true;
        }
    }
    return false;
};
console.log(hasIncreasingSubarrays([2,5,7,8,9,2,3,4,3,1], 3)); // Output: true
console.log(hasIncreasingSubarrays([1,2,3,4,4,4,4,5,6,7], 5)); // Output: false

// Q1 遍历数组，检查所有可能的起始位置 a，判断从 a 开始的两个长度为 k 的相邻子数组是否都是严格递增的。