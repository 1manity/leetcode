/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const row = matrix.length, col = matrix[0].length
    let need1Row =false,need1Col = false
    for (let i = 0;i < row;i++) {
        if (matrix[i][0] === 0) {
            need1Col = true
        }
    }
    for (let i = 0;i < col;i++) {
        if (matrix[0][i] === 0) {
            need1Row = true
        }
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    for (let i = 1; i < row; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 0; j < col; j++) {
                matrix[i][j] = 0
            }
        }
    }
    for (let i = 1; i < col; i++) {
        if (matrix[0][i] === 0) {
            for (let j = 0; j < row; j++) {
                matrix[j][i] = 0
            }
        }
    }

    if (need1Col) {
        for (let i = 0;i < row;i++) {
            matrix[i][0] = 0
        }
    }
    if (need1Row) {
        for (let i = 0;i < col;i++) {
            matrix[0][i] = 0
        }
    }

};
console.log(setZeroes(matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
