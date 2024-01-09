/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    const counts = []
    let left = 0
    while (left < s.length) {
        const item = parseInt(s[left])
        let count = 0
        while (left < s.length && item === parseInt(s[left])) {
            left ++
            count ++
        }
        counts.push(count)
    }
    let ans = 0
    for (let i = 1; i < counts.length; i++) {
        ans += Math.min(counts[i],counts[i-1])
    }
    return ans
};
console.log((0.1+0.2).toFixed(2))
