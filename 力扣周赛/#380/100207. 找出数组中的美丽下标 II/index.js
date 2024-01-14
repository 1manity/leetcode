var findAllStrStr = function(haystack, needle) {
    if (needle.length === 0) return [];

    let next = [0];
    let j = 0;
    for (let i = 1; i < needle.length; i++) {
        while (j > 0 && needle[i] !== needle[j]) {
            j = next[j - 1];
        }
        if (needle[i] === needle[j]) {
            j++;
        }
        next[i] = j;
    }

    let positions = [];
    j = 0;
    for (let i = 0; i < haystack.length; i++) {
        while (j > 0 && haystack[i] !== needle[j]) {
            j = next[j - 1];
        }
        if (haystack[i] === needle[j]) {
            j++;
        }
        if (j === needle.length) {
            positions.push(i - needle.length + 1);
            j = next[j - 1];
        }
    }
    return positions;
};

/**
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @param {number} k
 * @return {number[]}
 */
var beautifulIndices = function(s, a, b, k) {
    const arrA = findAllStrStr(s,a)
    const arrB = findAllStrStr(s,b)

    const ans = []

    let j = 0
    for (let i = 0; i < arrA.length; i++) {
        while (arrA[i] + k >= arrB[j]) {
            if (arrA[i] - k <= arrB[j] ) {
                ans.push(arrA[i])
                break
            }
            j++
        }
    }
    return ans
};
console.log(beautifulIndices(s = "isawsquirrelnearmysquirrelhouseohmy", a = "my", b = "squirrel", k = 15))
