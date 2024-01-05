/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    while (num1.length < num2.length) {
        num1 = '0' + num1
    }
    while (num1.length > num2.length) {
        num2 = '0' + num2
    }
    let ans = '', i = 0,cnt = 0
    while (i<num1.length || i < num2.length) {

        const n = num1[num1.length -1 - i].charCodeAt() + num2[num2.length -1 - i].charCodeAt() - 2 * '0'.charCodeAt() + cnt
        ans = (n % 10).toString() + ans
        cnt = Math.floor(n / 10)
        i++
    }
    return cnt?cnt.toString() + ans : ans

};


console.log(addStrings(num1 = "11", num2 = "123"))
