/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const ans = [-1,-1]
    let first = -1 ,last = -1

    const search = (left, right, callback)=> {
        while (left <= right) {
            const mid = (left + right) >> 1

            if (nums[mid] < target) {
                left = mid + 1
            } else if (nums[mid]>target) {
                right= mid - 1
            }
            else {
                const cb = callback(left, right, mid)
                left = cb[0]
                right = cb[1]
            }
        }
    }
    let left = 0,right = nums.length - 1
    search(left,right, (l,r,mid)=> {
        first = mid
        return [l,mid-1]
    })
    left = 0
    right = nums.length - 1
    search(left,right, (l,r,mid)=> {
        last = mid
        return [mid + 1,r]
    })
    return [first,last]
};
