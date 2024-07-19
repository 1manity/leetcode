/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const ans = [];
  const arr = [];
  const check = (x, y) => {
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i][1] === y ||
        Math.abs(arr[i][0] - x) === Math.abs(arr[i][1] - y)
      ) {
        return false;
      }
    }
    return true;
  };
  const dfs = (row, col) => {
    if (row >= n - 1) {
      const tmp = [];

      for (let i = 0; i < n; i++) {
        let tmpStr = "";
        for (let j = 0; j < n; j++) {
          let flag = false;
          for (let k = 0; k < arr.length; k++) {
            if (arr[k][0] === i && arr[k][1] === j) {
              flag = true;
            }
          }
          if (flag) tmpStr += "Q";
          else tmpStr += ".";
        }
        tmp.push(tmpStr);
      }
      ans.push(tmp);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (check(row + 1, i)) {
        arr.push([row + 1, i]);
        dfs(row + 1, i);
        arr.pop();
      }
    }
  };
  for (let i = 0; i < n; i++) {
    arr.push([0, i]);
    dfs(0, i);
    arr.pop();
  }

  return ans;
};
console.log(solveNQueens(4));
