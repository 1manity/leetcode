/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = (nums) => {
    let min, max
    max = min = nums[0], dp = [nums[0]]

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            [max, min] = [min, max]
        }

        max = Math.max(max * nums[i], nums[i])
        min = Math.min(min * nums[i], nums[i])

        dp[i] = max
    }

    return Math.max(...dp)
}
