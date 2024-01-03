/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const arr = s.split(' ')
    if (pattern.length !== arr.length) return false
    const pattern2s = new Map()
    const s2pattern = new Map()
    for (let i = 0;i<arr.length;i++) {
        if (pattern2s.get(pattern[i]) === undefined) {
            pattern2s.set(pattern[i],arr[i])
        } else {
            if (pattern2s.get(pattern[i]) !==arr[i]) {
                return false
            }
        }
        if (s2pattern.get(arr[i]) === undefined) {
            s2pattern.set(arr[i],pattern[i])
        } else {
            if (s2pattern.get(arr[i]) !==pattern[i]) {
                return false
            }
        }
    }
    return true
};
console.log(wordPattern(pattern = "abba", s = "dog cat cat fish"))
