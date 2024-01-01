/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority,count = 0

    for (let i=0;i<=nums.length;i++) {
        if (majority === nums[i]) {
            count += 1
        }
        else  {
            if (count === 0) {
                majority = nums[i]
                count ++
            } else {
                count --
            }
        }
    }
    return majority
};
console.log(majorityElement([1,2,1,2,1]))
