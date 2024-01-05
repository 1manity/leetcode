/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max =Number.MIN_SAFE_INTEGER, s = Number.MIN_SAFE_INTEGER,t = Number.MIN_SAFE_INTEGER
    for(let i=0;i<nums.length;i++) {
        max  = max>nums[i]?max:nums[i]
    }
    for(let i=0;i<nums.length;i++) {
        s = (s<nums[i] && nums[i]<max)?nums[i]:s
    }
    for(let i=0;i<nums.length;i++) {
        t = (t<nums[i] && nums[i]<s)?nums[i]:t
    }
    if(t !== Number.MIN_SAFE_INTEGER) {
        return t
    }else {
        return max
    }
};
