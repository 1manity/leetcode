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
    const dfs = (root) => {
        if (root === null) return 0

        const left = dfs(root.left)
        root.leftLength = left
        const right = dfs(root.right)
        root.rightLength = right

        return Math.max(left, right) + 1
    }
    dfs(root)
    let ans = 0
    const traverse = (root) => {
        if (root === null) return

        traverse(root.left)
        if (root.leftLength + root.rightLength > ans) {
            ans = root.leftLength + root.rightLength
        }
        traverse(root.right)
    }
    traverse(root)
    return ans
};
