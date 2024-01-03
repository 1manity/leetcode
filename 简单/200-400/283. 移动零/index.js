/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let num = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) num++
    }
    while (num) {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === 0) {
                let tmp = nums[i]
                nums[i] = nums[i+1]
                nums[i+1] = tmp
            }
        }
        num --
    }
};
