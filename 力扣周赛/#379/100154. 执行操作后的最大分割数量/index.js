function bitCount(n) {
    let count = 0;
    while (n !== 0) {
        count++;
        n &= n - 1;
    }
    return count;
}
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPartitionsAfterOperations = function (s, k) {
    const memo = new Map()
    const dfs = (i, mask, changed) => {
        if (i === s.length) {
            return 1
        }
        // const argsMask = (i << 32) | (mask << 1) | changed
        const argsMask = `${i}_${mask}_${changed}`
        if (memo.has(argsMask)) {
            return memo.get(argsMask)
        }
        let res;
        // 不改 s[i]
        let bit = 1 << (s.charCodeAt(i) - 'a'.charCodeAt(0));
        let newMask = mask | bit;
        if (bitCount(newMask) > k) {
            res = dfs(i + 1, bit, changed) + 1
        } else {
            res = dfs(i + 1, newMask, changed)
        }

        if (changed === 0) {
            for (let j = 0; j < 26; j++) {
                newMask = mask | (1 << j)
                if (bitCount(newMask) > k) {
                    res = Math.max(res, dfs(i + 1, 1 << j, 1) + 1)
                } else {
                    res = Math.max(res, dfs(i + 1, newMask, 1))
                }
            }
        }
        memo.set(argsMask, res)
        return res
    }
    return dfs(0, 0, 0)
};



console.log(maxPartitionsAfterOperations(s = "accca", k = 2))
// console.log(bitCount())
