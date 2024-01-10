/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let left = 0, right = k - 1, maxN = -1000000, maxIndex = -1
    const map = new Map()
    for (let i = left; i < right; i++) {
        const iIndex = (map.get(nums[i]) || 0)
        map.set(nums[i], Math.max(iIndex, i))
        if (maxN <= nums[i]) {
            maxN = nums[i]
            maxIndex = i
        }
    }

    const ans = []
    while (right < nums.length) {
        map.set(nums[right], right)
        if (nums[right] >= maxN) {
            maxN = nums[right]
            maxIndex = right
        }
        if (maxIndex < left) {

            for (let i = maxN; i >= -10000; i--) {
                if ((map.get(i) || 0) >= left) {

                    maxN = i
                    maxIndex = map.get(i)
                    break
                }
            }
        }

        ans.push(maxN)
        left++
        right++

    }
    return ans
};
console.log(maxSlidingWindow(nums = [1,3,-1,-3,5,3,6,7], k = 3))
