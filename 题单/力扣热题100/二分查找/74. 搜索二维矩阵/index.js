/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length,n = matrix[0].length
    let left = 0, right = m * n - 1
    while (left <= right) {
        const mid = (left + right) >> 1
        const x = Math.floor(mid / n),y = mid % n
        if (matrix[x][y] < target) {
            left = mid + 1
        } else  if (matrix[x][y] > target){
            right = mid -1
        } else {
            return true
        }
    }
    return false
};
