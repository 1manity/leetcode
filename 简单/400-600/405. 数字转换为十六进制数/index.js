/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    let ans = ""
    const to16 = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    if(num<0) {
        num = 2**32 + num
    }
    if(num === 0) return '0'
    while(num) {
        const tmp = num%16
        ans = to16[tmp] + ans
        num = Math.floor(num / 16)
    }

    return ans
};
