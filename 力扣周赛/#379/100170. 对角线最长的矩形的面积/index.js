/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
    let ans = 0, ansArea = 0
    for (const dimension of dimensions) {
        if (dimension[0] * dimension[0] + dimension[1] * dimension[1] > ans) {
            ans = dimension[0] * dimension[0] + dimension[1] * dimension[1]
            ansArea = dimension[0] * dimension[1]

        } else if (Math.max(dimension[0] * dimension[0] + dimension[1] * dimension[1] === ans)) {

            ansArea = Math.max(dimension[0] * dimension[1], ansArea)

        }
    }
    return ansArea
};
console.log(areaOfMaxDiagonal([[2, 6], [5, 1], [3, 10], [8, 4]]))
