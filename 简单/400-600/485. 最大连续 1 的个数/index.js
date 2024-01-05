/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let ans = 0, cnt = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            cnt++
        }
        if (nums[i] === 0 || i===nums.length - 1) {
            ans = Math.max(cnt, ans)
            cnt = 0
        }
    }

    return ans
};
