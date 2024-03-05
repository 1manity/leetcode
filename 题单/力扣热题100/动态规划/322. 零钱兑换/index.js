/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const dp = new Array(amount + 1).fill(-1)
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        let minn = Number.MAX_SAFE_INTEGER
        coins.forEach((v, index) => {
            if (v <= i && dp[i - v] !== -1) {
                minn = Math.min(minn, dp[i - v] + 1)
            }
        })
        if (minn === Number.MAX_SAFE_INTEGER) dp[i] = -1
        else dp[i] = minn
    }
    return dp[amount]
};
console.log(coinChange([1, 2, 5], 11))
