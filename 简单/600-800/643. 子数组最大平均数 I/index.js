/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let ans = Number.MIN_SAFE_INTEGER,cnt = 0
    for (let i = 0;i<nums.length;i++) {
        if (i<k) {
            cnt += nums[i]
        }
        else {
            cnt = cnt - nums[i-k] + nums[i]
            ans = Math.max(cnt/k,ans)

        }
        if (i === k-1) ans = Math.max(cnt/k,ans)
    }

    return ans
};
console.log(findMaxAverage([9,7,3,5,6,2,0,8,1,9],6))
