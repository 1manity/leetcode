/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  const width = board.length,
    height = board[0].length;
  const book = Array.from({ length: width }, () => new Array(height).fill(0));
  let ans = false;
  const dfs = (x, y, step) => {
    if (step === word.length || ans) {
      ans = true;
      return;
    }
    for (let i = 0; i < directions.length; i++) {
      const newX = x + directions[i][0],
        newY = y + directions[i][1];
      if (newX < 0 || newY < 0 || newX >= width || newY >= height) continue;
      if (board[newX][newY] === word[step] && book[newX][newY] === 0) {
        book[newX][newY] = 1;
        dfs(newX, newY, step + 1);
        book[newX][newY] = 0;
      }
    }
  };
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (board[i][j] === word[0]) {
        book[i][j] = 1;
        dfs(i, j, 1);
        book[i][j] = 0;
      }
    }
  }
  return ans;
};
