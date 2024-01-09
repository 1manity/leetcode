/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const set = new Set()
    const ans = []
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        let left = i + 1, right = nums.length - 1

        if (i > 0 && nums[i] === nums[i - 1]) continue
        if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break
        if (nums[i] + nums[nums.length - 1] + nums[nums.length - 2] < 0) continue

        while (left < right) {
            const sum = nums[left] + nums[right] + nums[i]
            if (sum > 0) {
                right--
            } else if (sum < 0) {
                left++
            } else {
                const list = [nums[i], nums[left], nums[right]]

                ans.push(list)

                for (left++; left < right && nums[left] === nums[left - 1]; left++) ;
                for (right--; left < right && nums[right] === nums[right + 1]; right--) ;

            }
        }
    }
    return ans
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]))


