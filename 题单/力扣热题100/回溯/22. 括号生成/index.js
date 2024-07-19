/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const dict = ["(", ")"];
  const arr = [];
  const ans = [];
  const dfs = (step, now) => {
    if (now < 0) return;
    if (step >= n * 2) {
      if (now === 0) {
        ans.push(arr.join(""));
      }
      return;
    }
    dict.forEach((v) => {
      arr.push(v);
      if (v === "(") dfs(step + 1, now + 1);
      else dfs(step + 1, now - 1);
      arr.pop();
    });
  };
  dfs(0, 0);
  return ans;
};
