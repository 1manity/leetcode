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
var isBalanced = function(root) {
    const getDeep=(root)=> {
        if (root === null) return 0
        return Math.max(getDeep(root.left),getDeep(root.right)) + 1
    }

    if (root === null) return true
    if (Math.abs(getDeep(root.left) - getDeep(root.right)) > 1) {
        return false
    } else {
        return isBalanced(root.left )&& isBalanced(root.right)
    }
};
