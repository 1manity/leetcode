/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const map = new Map()

    for (const num of nums) {
        map.set(num,(map.get(num) || 0) + 1)
    }
    let max = 0
    for (const [k,v] of map) {
        if (map.has(k+1))
            if (v + map.get(k+1) > max) {
                max = v + (map.get(k+1) || 0)
            }
    }
    return max
};
