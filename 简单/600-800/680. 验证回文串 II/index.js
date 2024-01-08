/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let l=0,r = s.length-1
    const dfs = (l,r,changed)=> {
        if (l===r) {
            if (changed)
                return true
        }
        else if (l>r) return true
        if (s[l]===s[r])
            return dfs(l+1,r-1,changed)
        else {
            if (changed)
                return dfs(l+1,r,false) ||dfs(l,r-1,false)
            else return false
        }
    }
    return dfs(l,r,true)
};
