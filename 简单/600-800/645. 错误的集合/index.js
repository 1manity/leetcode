/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const set = new Set(nums)
    let cnt = 0,tmp = 0
    for (let i=1;i<=nums.length ;i++ ) {
        if (!set.has(i)) {
            tmp = i
        }
        cnt=cnt^i^nums[i -1 ]
    }
    return [cnt^tmp,tmp]
};
console.log(findErrorNums([1,2,2,4]))
