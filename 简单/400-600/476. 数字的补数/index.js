/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let ans = 0,n = 0
    while (num) {
        ans = ((num & 1) ^ 1) << n | ans
        num = num >>> 1
        n++
    }
    return ans
};
console.log(findComplement(2))
