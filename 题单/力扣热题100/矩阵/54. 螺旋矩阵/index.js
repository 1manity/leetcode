/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const ans = []
    let left =0,right = matrix[0].length -1,top = 0,bottom = matrix.length - 1

    while (left <= right && top <= bottom) {

        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i])
        }
        top ++
        for (let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right])
        }
        right --
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                ans.push(matrix[bottom][i])
            }
        }
        bottom --
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                ans.push(matrix[i][left])
            }
        }
        left ++
    }
    return ans
};
console.log(spiralOrder(matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
