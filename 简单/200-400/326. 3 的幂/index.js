/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n<1) return false
    while (n>0) {
        if (n === 1) return true
        if (n%3!== 0) return false
        else if (n%3 === 0) n = n/3
    }

};
