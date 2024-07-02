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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const check = (leftNode, rightNode) => {
    if (leftNode === null && rightNode === null) return true;
    if (leftNode && rightNode && leftNode.val === rightNode.val) {
      return (
        check(leftNode.left, rightNode.right) &&
        check(leftNode.right, rightNode.left)
      );
    }
    return false;
  };
  return check(root.left, root.right);
};
