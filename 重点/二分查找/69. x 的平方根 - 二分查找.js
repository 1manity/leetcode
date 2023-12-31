/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let left = 0, right = x
    while (left <= right) {
        const mid = left + ((right - left) >> 1)
        if (mid * mid <= x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return right
};
