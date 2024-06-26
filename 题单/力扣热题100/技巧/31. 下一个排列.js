/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let flag = false
    for (let i = nums.length - 1 ; i > 0 ; i--) {
        if (nums[i] > nums[i-1]) {
            flag = true
            let tmp = Number.MAX_SAFE_INTEGER,pos = i
            for (let j = i; j < nums.length; j++) {
                if (nums[j] > nums[i - 1] && nums[j] <= tmp) {
                    tmp = nums[j]
                    pos = j
                }
            }
            swap(nums,i-1,pos)
            reverse(nums,i,nums.length - 1)
            break
        }
    }
    if (!flag) {
        reverse(nums,0,nums.length-1)
    }
};
function swap(nums,i,j) {
    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
}
function reverse(nums,left,right) {
    for (let i = left,j = right; i < j; i++,j--) {
        swap(nums,i,j)
    }
}
console.log(nextPermutation([1,2,3]))
