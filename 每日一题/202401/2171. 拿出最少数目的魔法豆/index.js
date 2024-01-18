/**
 * @param {number[]} beans
 * @return {number}
 */
var minimumRemoval = function(beans) {
    beans.sort((a,b) => a-b)
    let ans = Number.MAX_SAFE_INTEGER
    const pre = [beans[0]]
    for (let i = 1; i < beans.length; i++) {
        pre.push(pre[i - 1] + beans[i])
    }
    for (let i = 0; i < beans.length; i++) {
        const tmp = pre[beans.length - 1]  - (beans.length - i) * beans[i]
        ans = Math.min(tmp,ans)
    }
    return ans
};
console.log(minimumRemoval([4,1,6,5]))
