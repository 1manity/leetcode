
function kmp(text, pattern) {
    if (pattern.length === 0) {
        return 0
    }
    let pat = buildPatternArray(pattern)
    let j = 0

    for (let i = 0;i< text.length;i++) {
        console.log(i , j)
        while (j > 0 && text[i] !==pattern[j]) {
            j = pat[j-1]
        }
        if (text[i] === pattern[j]) {
            j++
        }
        if (j >=pattern.length) {
            return i-j +1
        }
    }
    return -1
}

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
    return pat
}

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {

    return kmp((s + s).slice(1, -1), s) !== -1
};
