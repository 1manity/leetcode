/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    const dp = new Array(s.length + 1).fill(0)
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')' && s[i - 1] === '(') {
            if (i < 2) dp[i] = 2
            else dp[i] = dp[i - 2] + 2
        } else if (s[i] === ')' && s[i - 1] === ')') {
            if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === '(') {
                if (i - dp[i - 1] - 2 < 0) dp[i] = dp[i - 1] + 2
                else dp[i] = dp[i - 1] + dp[i - dp[i - 1] - 2] + 2
            }
        }
    }
    return Math.max(...dp)
};

console.log(longestValidParentheses("(()())"))
