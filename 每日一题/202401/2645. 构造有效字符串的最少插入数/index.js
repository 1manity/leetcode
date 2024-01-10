/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function (word) {
    let ans = 0, pre = 2
    for (const str of word) {
        const n = str.charCodeAt() - 'a'.charCodeAt()
        n <= pre && ans++
        pre = n
    }
    return ans * 3 - word.length
};
console.log(addMinimum('abc'))
