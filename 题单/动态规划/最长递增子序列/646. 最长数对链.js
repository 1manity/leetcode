/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {

    pairs.sort((a,b)=>a[0] - b[0])

    const dp = new Array(pairs.length).fill(1)

    for (let i = 0; i < pairs.length; i++) {
        for (let j = 0; j < i; j++) {
            if(pairs[i][0] > pairs[j][1]) {
                dp[i] = Math.max(dp[i],dp[j] + 1)
            }
        }
    }
    // console.log(pairs)
    return Math.max(...dp)
};
console.log(findLongestChain([[1,2], [3,4], [2,3]]))
