/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    const map = new Map()
    for (const s of words1) {
        if (map.has(s)) {
            map.set(s,-1)
        } else  {
            map.set(s,1)
        }
    }
    for (const s of words2) {
        if (map.get(s) !==1) {
            map.set(s,-1)
        } else  {
            map.set(s,2)
        }
    }
    let ans = 0
    for (const [k,v] of map) {
        if (v === 2) ans ++
    }
    return ans
};
console.log(countWords(words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]))
