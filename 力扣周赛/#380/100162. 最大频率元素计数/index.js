/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const map  = new Map()
    let max = 0
    for (const num of nums) {
        map.set(num,(map.get(num)||0) + 1)
        max = Math.max(max,map.get(num))
    }

    let ans = 0
    for (const [k,v] of map) {
        if(v === max) {
            ans +=v
        }
    }
    return ans
};
console.log(maxFrequencyElements([1,1,1,2,2,2,2]))
