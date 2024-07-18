/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ans = [];
  const set = new Set();
  const num = nums.length;

  const dfs = (count, arr) => {
    if (count >= num) {
      ans.push([...arr]);
      return;
    }
    for (let i = 0; i < num; i++) {
      const tmp = nums[i];
      if (!set.has(tmp)) {
        set.add(tmp);
        arr.push(tmp);
        dfs(count + 1, arr);
        set.delete(tmp);
        arr.pop();
      }
    }
  };
  dfs(0, []);
  return ans;
};
