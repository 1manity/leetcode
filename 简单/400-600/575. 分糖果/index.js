/**
 * @param {number[]} candyType
 * @return {number}
 */
// var distributeCandies = function (candyType) {
//     const map = new Map()
//     for (const i of candyType) {
//
//         map.set(i, (map.get(i) || 0) + 1)
//
//     }
//     let cnt = candyType.length / 2
//     if (map.size <= cnt) return map.size
//     else return cnt
//
// };
var distributeCandies = function(candyType) {
    const set = new Set(candyType);
    return Math.min(set.size, candyType.length / 2);
};
