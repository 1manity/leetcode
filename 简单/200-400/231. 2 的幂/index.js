/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    while (1) {
        if (n === 1) return true
        if (n%2 !== 0 || n <= 0) return false
        n=n/2
    }
};
console.log(0.5%2)
