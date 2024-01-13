/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
    let N = 26;
    let count = new Array(N).fill(0);
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
    }
    let ret = [];
    let m = 0;
    for (let i = N - 1, j = N - 2; i >= 0 && j >= 0;) {
        if (count[i] === 0) { // 当前字符已经填完，填入后面的字符，重置 m
            m = 0;
            i--;
        } else if (m < repeatLimit) { // 当前字符未超过限制
            count[i]--;
            ret.push(String.fromCharCode(97 + i));
            m++;
        } else if (j >= i || count[j] === 0) { // 当前字符已经超过限制，查找可填入的其他字符
            j--;
        } else { // 当前字符已经超过限制，填入其他字符，并且重置 m
            count[j]--;
            ret.push(String.fromCharCode(97 + j));
            m = 0;
        }
    }
    return ret.join('');
};
