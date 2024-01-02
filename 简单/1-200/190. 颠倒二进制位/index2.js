/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let ans = 0,cnt = 0
    while(cnt < 32) {
        const tmp = n % 2

        ans *= 2
        ans += tmp

        n = Math.floor(n/2)
        cnt ++
    }
    return ans
};
