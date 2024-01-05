/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let ans = 0
    while (x > 0 || y > 0) {
        if ((x & 1) !== (y & 1)) {
            ans++
        }
        x = x >>> 1
        y = y >>> 1
    }
    return ans
};
