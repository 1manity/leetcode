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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];
  const arr = [root];
  const ans = [];
  while (arr.length) {
    const length = arr.length;
    const tmpArr = [];
    for (let i = 0; i < length; i++) {
      const tmpNode = arr.shift();
      tmpNode.left && arr.push(tmpNode.left);
      tmpNode.right && arr.push(tmpNode.right);
      tmpArr.push(tmpNode.val);
    }
    ans.push(tmpArr);
  }
  return ans;
};
