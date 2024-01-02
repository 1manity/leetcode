/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ans = '';
     for (let i = 0 ;;i++) {
         let tmp = '';
         for (const str of strs) {
             if (str.length <= i ) return ans;
             if (tmp === '') {
                 // console.log(str[i])

                 tmp = str[i];
             }
             else {
                 if (tmp !== str[i])
                     return ans;
             }
         }
         ans += tmp;
     }
};

