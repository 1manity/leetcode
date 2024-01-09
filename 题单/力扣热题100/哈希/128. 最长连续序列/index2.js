/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {

    let ans = 0
    const set = new Set()
    for (const num of nums) {
        set.add(num)
    }
    for (const v of set) {
        if (set.has(v - 1)) continue
        let tmpAns = 1,cnt = v
        while (set.has(cnt+1)) {
            cnt++
            tmpAns++
        }
        ans = Math.max(ans,tmpAns)
    }
    return ans
};
