/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    const ans = new Array(2)

    for(let i = 1;i<=Math.sqrt(area);i++) {
        if (area % i === 0) {
            ans[0] = area / i
            ans[1] = i
        }
    }
    return ans
};
// var constructRectangle = function(area) {
//     let w = Math.floor(Math.sqrt(area));
//     while (area % w !== 0) {
//         --w;
//     }
//     return [Math.floor(area / w), w];
// };

