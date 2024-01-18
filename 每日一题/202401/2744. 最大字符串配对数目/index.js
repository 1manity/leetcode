/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    const n = words.length;
    const seen = new Set();
    let ans = 0;
    for (const word of words) {
        if (seen.has(word.charCodeAt(1) * 100 + word.charCodeAt(0))) {
            ++ans;
        }
        seen.add(word.charCodeAt(0) * 100 + word.charCodeAt(1));
    }
    return ans;
};
