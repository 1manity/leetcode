/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    const arr = s.toLocaleUpperCase().replaceAll('-','')
    let ans = '',cnt = 0
    for (let i = arr.length-1;i>=0 ;i--) {
        cnt += 1
        ans = arr[i] + ans

        if (cnt===k) {
            cnt = 0
            if (i!== 0) {
                ans = '-' + ans
            }
        }

    }
    return ans
};
console.log(licenseKeyFormatting("2-4A0r7-4k",4))
