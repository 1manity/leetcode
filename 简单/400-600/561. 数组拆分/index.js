/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    return nums
        .sort((a, b) => a - b)
        .filter((value, index) => index % 2 === 0)
        .reduce((p, c) => p + c, 0)
};
console.log(arrayPairSum([6214, -2290, 2833, -7908])
    )
