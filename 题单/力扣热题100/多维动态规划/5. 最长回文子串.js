/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    if (n === 0) return ""; // 空字符串特殊处理

    const dp = Array.from({length: n}, () => Array(n).fill(false));
    let start = 0; // 记录最长回文子串的起始位置
    let maxLength = 1; // 记录最长回文子串的长度

    // 初始化单字符的回文子串
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    for (let j = 1; j < s.length; j++) {
        for (let i = 0; i < j; i++) {
            if (s[i] !== s[j]) {
                dp[i][j] = false;
            } else {
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }

            // 只要 dp[i][j] == true 成立，就表示子串 s[i..j] 是回文，此时记录回文长度和起始位置
            if (dp[i][j] && j - i + 1 > maxLength) {
                maxLength = j - i + 1;
                start = i;
            }
        }
    }


    return s.slice(start, start + maxLength);
};

console.log(longestPalindrome("babad")); // 输出 "bab" 或 "aba"
console.log(longestPalindrome("cbbd")); // 输出 "bb"

