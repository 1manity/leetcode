/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let ans = 0
    while (columnTitle !== '') {
        const tmp = columnTitle.substring(0,1)
        const tmpNumber = tmp.charCodeAt() - 64
        ans *= 26
        ans += tmpNumber

        columnTitle = columnTitle.substring(1)
    }
    return ans
};
let test ='1'
const test1 = test.substring(1)
console.log(test)
console.log(titleToNumber('AA'))
