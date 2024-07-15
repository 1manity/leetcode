/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const width = grid.length;
  const height = grid[0].length;
  const step = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const dfs = (x, y) => {
    grid[x][y] = "0";
    step.forEach((arr) => {
      const nextX = x + arr[0];
      const nextY = y + arr[1];
      if (
        nextX >= 0 &&
        nextX < width &&
        nextY >= 0 &&
        nextY < height &&
        grid[nextX][nextY] === "1"
      ) {
        dfs(nextX, nextY);
      }
    });
  };
  let ans = 0;
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (grid[i][j] === "1") {
        ans++;
        dfs(i, j);
      }
    }
  }
  return ans;
};
