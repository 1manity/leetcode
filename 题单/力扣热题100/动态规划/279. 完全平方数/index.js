/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    const dp = new Array(n + 1).fill(0)

    dp[0] = 0, dp[1] = 1

    for (let i = 2; i <= n; i++) {
        let minn = Number.MAX_SAFE_INTEGER
        for (let j = 1; j * j <= i; j++) {
            minn = Math.min(dp[i - j * j] + 1, minn)
        }
        dp[i] = minn
    }
    return dp[n]
};
