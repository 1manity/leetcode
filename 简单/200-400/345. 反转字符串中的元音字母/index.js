/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0, right = s.length -1
    const vowel =['a','e','i','o','u','A','E','I','O','U']
    while(left < right) {
        while(!vowel.includes(s[left]) && left < right) {
            left ++
        }
        while(!vowel.includes(s[right]) && left < right) {
            right --
        }
        if(left < right) {

            s = s.slice(0,left)+s[right] + s.slice(left+1,right)+s[left]+s.slice(right+1)
            left ++
            right --
        }
    }
    return s
};
