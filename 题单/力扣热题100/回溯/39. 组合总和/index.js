/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const num = candidates.length;
  const ans = [];
  const nums = [];
  const dfs = (min, now) => {
    if (now > target) return;
    if (now === target) {
      ans.push([...nums]);
      return;
    }
    for (let i = 0; i < num; i++) {
      if (candidates[i] < min) continue;
      nums.push(candidates[i]);
      dfs(candidates[i], now + candidates[i]);
      nums.pop();
    }
  };
  dfs(2, 0);
  return ans;
};
