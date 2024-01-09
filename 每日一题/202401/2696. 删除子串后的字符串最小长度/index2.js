/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    const ans = []
    let j=0
    for (const i of s) {
        ans.push(i)

        if (j>0) {
            if (ans[j-1] === 'A' && ans[j]==='B')  {
                ans.pop()
                ans.pop()
                j-=2
            }
            if (ans[j-1] === 'C' && ans[j]==='D')  {
                ans.pop()
                ans.pop()
                j-=2
            }
        }
        j++
    }
    return ans.length
};


