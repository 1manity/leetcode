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
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const set = new Set()

    const dfs = (root) => {
        if (root === null) return false

        if (set.has(k - root.val)) return true

        set.add(root.val)
        return dfs(root.left) || dfs(root.right)
    }

    return dfs(root)
};
