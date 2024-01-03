/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num>=10) {
        let tmp = num,cnt = 0

        while (tmp>0) {
            cnt += tmp%10
            tmp = Math.floor(tmp/10)
        }
        num = cnt
    }
    return num
};
console.log(addDigits(123))
