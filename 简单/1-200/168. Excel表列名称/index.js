/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let ans = ''
    while (columnNumber !== 0) {
        const tmp = columnNumber % 26 === 0? 26:columnNumber % 26
        ans = String.fromCharCode(tmp +64) + ans
        console.log(columnNumber)
        columnNumber = Math.floor(columnNumber / 26)
        if (tmp === 26) {
            columnNumber-=1
        }

    }
    return ans
};

console.log(convertToTitle(52))
