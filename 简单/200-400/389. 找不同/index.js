/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let ans = 0
    for(let i=0;i<s.length;i++) {
        ans ^= s[i].charCodeAt() ^ t[i].charCodeAt()
    }
    return String.fromCharCode(ans^t[t.length - 1].charCodeAt())
};
