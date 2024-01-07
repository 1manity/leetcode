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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    let ans = false
    const dfs = (root) => {
        if (root === null) return

        if (root.val === subRoot.val) ans |= compareTree(root, subRoot)
        dfs(root.left)
        dfs(root.right)
    }
    const compareTree = (root, subRoot) => {
        if (root.val !== subRoot.val) {
            return false
        }
        if (root.left === null && subRoot.left !== null) return false
        if (root.right === null && subRoot.right !== null) return false
        if (root.left !== null && subRoot.left === null) return false
        if (root.right !== null && subRoot.right === null) return false

        let result = true
        if (root.left !== null && subRoot.left !== null) {
            result &= compareTree(root.left, subRoot.left)

        }

        if (root.right !== null && subRoot.right !== null) {
            result &= compareTree(root.right, subRoot.right)
        }

        return result
    }
    dfs(root)
    return ans
};
