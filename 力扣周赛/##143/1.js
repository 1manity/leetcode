/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    while(true) {
        
        let cnt = 1
        let tmp = n
        while(tmp > 0) {
            cnt = cnt * (tmp % 10)
            tmp = Math.floor(tmp / 10)
        }
        if(cnt % t === 0) {
            return n
        }
        n = n + 1
    }
};
console.log(smallestNumber(1, 3))