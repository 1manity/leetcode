/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1 || n === 2) return n
    let ans = [1,2]
    for (let i = 3;i<=n;i++) {
        ans[1] = ans[0] + ans[1]
        ans[0] = ans[1] - ans[0]
    }
    return ans[1]
};
