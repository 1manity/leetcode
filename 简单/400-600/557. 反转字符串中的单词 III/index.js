/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split(' ')
    const ans = []
    for (const string of arr) {
        ans.push(string.split('').reverse().join(''))
    }
    return ans.join(' ')
};
