/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let ans;
  let tmp = k;
  const dfs = (root) => {
    if (root === null) return;

    dfs(root.left);
    tmp--;
    if (tmp === 0) ans = root.val;
    dfs(root.right);
  };
  dfs(root, k);
  return ans;
};
