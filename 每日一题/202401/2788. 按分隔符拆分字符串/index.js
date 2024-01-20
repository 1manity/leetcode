/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    const ans = []
    for (const word of words) {
        ans.push(...word.split(separator).filter(v=>v!==''))
    }
    return ans
};
