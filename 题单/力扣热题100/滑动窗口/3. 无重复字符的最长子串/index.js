/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const arr = []
    let ans = 0
    for (const i of s) {
        if (!arr.includes(i)) {
            arr.push(i)
        }
        else  {
            while (arr.includes(i)) {
                arr.shift()
            }
            arr.push(i)
        }
        ans = Math.max(arr.length,ans)
    }
    return ans
};
