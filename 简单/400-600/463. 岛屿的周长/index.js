/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let ans = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                let tmp = 0
                if (i - 1 < 0 || grid[i - 1][j] === 0) tmp++
                if (j - 1 < 0 || grid[i][j - 1] === 0) tmp++
                if (i + 1 >= grid.length || grid[i + 1][j] === 0) tmp++
                if (j + 1 >= grid[0].length || grid[i][j + 1] === 0) tmp++

                ans += tmp
            }
        }
    }
    return ans
};
