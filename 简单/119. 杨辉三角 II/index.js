/**
 * @param {number} numRows
 * @return {number[][]}
 */
var getRow = function (numRows) {
    let dp = [];
    dp[0] = 1
    for (let i = 1; i <= numRows; i++) {
        dp[i] = dp[i-1] * (numRows - i + 1) / i
    }
    return dp;
};

const re = generate(3)
console.log(re)
