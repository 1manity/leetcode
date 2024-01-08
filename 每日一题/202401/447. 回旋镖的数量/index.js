/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    let ans = 0

    for (let i = 0; i < points.length; i++) {
        const map = new Map()
        for (let j = 0; j < points.length; j++) {

            let ij = (points[i][0] - points[j][0]) ** 2 + (points[i][1] - points[j][1]) ** 2
            map.set(ij,(map.get(ij)||0) + 1)
        }
        for (const [k,v] of map) {
            ans += v*(v-1)
        }
    }
    return ans
};
