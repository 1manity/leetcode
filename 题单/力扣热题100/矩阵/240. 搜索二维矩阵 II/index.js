/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const search = (nums, target) => {
        let low = 0, high = nums.length - 1
        while (low <= high) {
            let mid = Math.floor((low + high) / 2)
            if (nums[mid] === target) {
                return true
            } else if (nums[mid] < target) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
        return false
    }

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] > target) {
            continue
        }
        if (matrix[i][matrix[i].length - 1] < target) {
            continue
        }

        if (search(matrix[i], target)) {
            return true
        }

    }
    return false
};
