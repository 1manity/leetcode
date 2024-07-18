/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const ans = [];
  const num = nums.length;
  const dfs = (count, arr) => {
    if (count >= num) {
      ans.push([...arr]);
      return;
    }

    const target = nums[count];
    arr.push(target);
    dfs(count + 1, arr);
    arr.pop();
    dfs(count + 1, arr);
  };
  dfs(0, []);
  return ans;
};
