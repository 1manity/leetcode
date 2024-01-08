/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let flag =  n % 2
    while (n>0) {
        if (n % 2 !== flag) return false
        flag = flag ^ 1
        n = n >>> 1
    }
    return true
};
console.log(hasAlternatingBits(3))
