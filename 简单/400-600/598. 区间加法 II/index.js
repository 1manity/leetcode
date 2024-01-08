/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if (!ops.length) return m*n
    let cntn = 40000+5,cntm = 40000+5
    for (const op of ops) {
        cntn = Math.min(op[0],cntn)
        cntm = Math.min(op[1],cntm)
    }
    return cntn * cntm
};
