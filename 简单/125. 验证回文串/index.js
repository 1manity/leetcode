/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const s1 = s.toLowerCase().replace(/[^a-z0-9]/gi,'')
    for (let i=0;i<s1.length/2;i++) {
        if (s1[i]!== s1[s1.length-1-i]) {
            return false
        }
    }
    return true
};
console.log(isPalindrome(" "))
