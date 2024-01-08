/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    let i = Number.MIN_SAFE_INTEGER, j = Number.MIN_SAFE_INTEGER, k = Number.MIN_SAFE_INTEGER
    let negativeI = Number.MAX_SAFE_INTEGER, negativeJ = Number.MAX_SAFE_INTEGER
    for (const num of nums) {

        if (num > i) {
            k = j
            j = i
            i = num
        } else if (num > j) {
            k = j
            j = num
        } else if (num > k) {
            k = num
        }

        if (num < negativeI) {
            negativeJ = negativeI
            negativeI = num
        } else if (num < negativeJ) {
            negativeJ = num
        }
    }
    return Math.max(negativeI * negativeJ * i, i * j * k)
};
console.log(maximumProduct([1000,1000,1000]))
