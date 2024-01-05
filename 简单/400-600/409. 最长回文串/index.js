/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const arr = new Array(128).fill(0)

    for(let i = 0;i<s.length;i++) {
        arr[s[i].charCodeAt()] +=1
    }
    let ans = 0,maxOdd = 0,haveOdd = false
    for(const i of arr) {
        if(i % 2 === 0) {
            ans += i
        } else {
            haveOdd = true
            if(maxOdd > i) {
                ans += i-1
            } else {
                ans += maxOdd - 1
                maxOdd = i
            }
        }
    }
    return ans + maxOdd +( haveOdd?1:0)
};
