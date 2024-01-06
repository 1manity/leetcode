/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const regex = new RegExp(`.{1,${k}}`, 'g');
    const arr = s.match(regex) || []
    const ans = []
    for (let i = 0;i<arr.length;i++) {
        if (i % 2 === 0) {
            ans.push(arr[i].split('').reverse().join(""))
        }
        else {
            ans.push(arr[i])
        }
    }
    return ans.join('')
};
