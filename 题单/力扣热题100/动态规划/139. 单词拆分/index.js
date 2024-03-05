/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    for (let i = 1; i <= s.length; i++) {
        const tmpS = s.slice(0,i)
        wordDict.forEach(v=> {
            if (tmpS.endsWith(v)) {
                if (dp[i-v.length]) {
                    dp[i] = true
                }
            }
        })

    }
    return dp[s.length]
};
console.log(wordBreak(s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]))
