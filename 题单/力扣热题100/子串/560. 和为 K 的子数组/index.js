/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const map = new Map()
    map.set(0,1)
    let ans=0,pre = 0
    for (const num of nums) {
        pre +=num
        if (map.has(pre - k)) {
            ans += map.get(pre - k)
        }
        map.set(pre,(map.get(pre)||0) + 1)
    }
    return ans
};
console.log(subarraySum([1,2],1))
