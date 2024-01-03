/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map()
    for(let i=0;i<nums.length;i++) {
        const flag = map.get(nums[i])
        if(flag !== undefined) {
            if(Math.abs(flag-i)<=k) {
                return true
            }
        }
        map.set(nums[i],i)
    }
    return false
};
