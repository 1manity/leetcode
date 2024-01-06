/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) return '0'
    let ans = '',symbol = num<0?'-':''
    num = Math.abs(num)
    while (num) {
        ans = num%7 + ans
        num = Math.floor(num / 7)
    }
    return symbol + ans
};
console.log(convertToBase7(0))
