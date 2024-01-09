/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length <=0) return 0
    const map = new Map()
    for (const num of nums) {
        map.set(num, 0)
    }
    for (const [k, v] of map) {
        const dfs = (i) => {
            if ((map.get(i) || 0) > 0) return map.get(i)
            if (map.has(i)) {
                const tmp = dfs(i + 1) + 1
                map.set(i, tmp)
                return tmp
            } else {
                return 0
            }
        }
        dfs(k)
    }
    return Math.max(...map.values())
};
const set = new Set()
set.add(1)
set.add(0)
console.log(set)
