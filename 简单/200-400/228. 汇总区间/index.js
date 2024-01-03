/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    const ans = []
    for (let i = 0; i < nums.length; i++) {
        let index = 0
        while (1) {
            if (nums[i] + index === nums[i + index]) {
                index++

            } else {
                if (index === 1) {
                    ans.push(`${nums[i]}`)
                }
                else {
                    ans.push(`${nums[i]}->${nums[i+index-1]}`)
                }
                i += index -1
                break
            }
        }
    }
    return ans
};
console.log(summaryRanges([0,2,3,4,6,8,9]))
