/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map()
    for (const num of nums) {
        if (map.has(num))
            map.set(num,map.get(num) + 1)
        else
            map.set(num,1)
    }

    for (const [key,val] of map) {
        if (val > nums.length / 2) return key
    }

};
console.log(majorityElement([3,2,3]))
