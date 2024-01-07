/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const arr = []
    for (let i=0;i<mat.length;i++) {
        arr.push(...mat[i])
    }
    if (r * c !==arr.length) {
        return mat
    }
    let k = 0
    const ans = []
    console.log(arr)
    for (let i = 0;i<r;i++) {
        const tmp = []
        for(let j = 0;j<c;j++) {
            tmp.push(arr[k++])
        }
        ans.push(tmp)
    }

    return ans
};
console.log(matrixReshape(mat = [[1,2],[3,4]], r = 2, c = 4))
