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
var diameterOfBinaryTree = function (root) {
  let ans = 0;
  const dfs = (root) => {
    if (root === null) return 0;
    const left = dfs(root.left);
    const right = dfs(root.right);
    ans = Math.max(ans, left + right);
    return Math.max(left, right) + 1;
  };
  dfs(root);
  return ans;
};
// var diameterOfBinaryTree = (root) => {
//     if (root === null) return 0;
//     const left = calcTreeHeight(root.left);
//     const right = calcTreeHeight(root.right);
//     return Math.max(
//         diameterOfBinaryTree(root.left),
//         diameterOfBinaryTree(root.right),
//         left + right + 1
//     );
// };
// var calcTreeHeight = function (root) {
//   if (root === null) return 0;
//   const arr = [root];
//   let ans = 0;
//   while (arr.length > 0) {
//     const length = arr.length;
//     for (let i = 0; i < length; i++) {
//       const node = arr.shift();
//       if (node.left !== null) {
//         arr.push(node.left);
//       }
//       if (node.right !== null) {
//         arr.push(node.right);
//       }
//     }
//     ans++;
//   }
//   return ans;
// };
