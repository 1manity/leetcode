/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {

};
function buildPatternArray(pattern) {
    const pat = new Array(pattern.length).fill(0)
    let j = 0

    for (let i = 1;i<pattern.length;i++) {
        while (j>0 && pattern[i] !== pattern[j]) {
            j = pat[j - 1]
        }
        if (pattern[i] === pattern[j]) {
            j++
        }
        pat[i] = j
    }
}
