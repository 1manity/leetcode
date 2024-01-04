/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const list = new Array(26).fill(0)
    for(let i = 0;i<s.length;i++) {
        list[s[i].charCodeAt() - 'a'.charCodeAt()] += 1
    }
    for(let i = 0;i<s.length;i++) {
        if(list[s[i].charCodeAt() - 'a'.charCodeAt()] === 1) {
            return i
        }
    }
    return -1
};
