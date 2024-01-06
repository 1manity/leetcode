/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    let a = 0, l = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            l = 0
            a++
            if (a > 1) return false
        } else if (s[i] === 'L') {
            l++
            if (l >= 3) return false
        } else {

            l = 0
        }
    }
    return true
};
console.log(checkRecord('LLAL'))
