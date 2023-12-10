/**
 * 杨辉三角
 * @param {number} numRows
 * @return {number[][]}
 */
// var generate = function(numRows) {
//     if (numRows === 1) return [[1]]
//     const ans = [[1]]
//     for (let i=2;i<=numRows;i++) {
//         const row = []
//         for (let j = 0;j<numRows -1;i++) {
//             row
//         }
//     }
// };


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let dp = [];
    for (let i = 0; i < numRows; i++) {
        dp[i] = Array(i+1).fill(1);
        for (let j = 1; j < i; j++) {
            dp[i][j]=dp[i-1][j-1]+dp[i-1][j];
        }
    }
    return dp;
};
