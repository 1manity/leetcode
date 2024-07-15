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
 * @return {number}
 */
// var maxPathSum = function (root) {
//   let ans = Number.MIN_SAFE_INTEGER;
//   const traversal = (root) => {
//     if (root === null) return;
//     const left = dfs(root.left);
//     const right = dfs(root.right);

//     ans = Math.max(
//       ans,
//       right + root.val + left,
//       right + root.val,
//       left + root.val,
//       root.val
//     );

//     traversal(root.left);
//     traversal(root.right);
//   };
//   traversal(root);

//   return ans;
// };
// const dfs = (root) => {
//   let max = Number.MIN_SAFE_INTEGER;
//   const _dfs = (root, cnt) => {
//     if (root === null) return;

//     max = Math.max(max, cnt + root.val);
//     _dfs(root.left, cnt + root.val);
//     _dfs(root.right, cnt + root.val);
//   };
//   _dfs(root, 0);
//   return max;
// };
const maxPathSum = (root) => {
  let maxSum = Number.MIN_SAFE_INTEGER;

  const dfs = (root) => {
    if (root === null) return 0;
    const left = dfs(root.left);
    const right = dfs(root.right);
    const thisRootMax = root.val + left + right;
    maxSum = Math.max(thisRootMax, maxSum);

    const thisRootOutput = root.val + Math.max(0, left, right);
    return thisRootOutput > 0 ? thisRootOutput : 0;
  };

  dfs(root);

  return maxSum;
};
