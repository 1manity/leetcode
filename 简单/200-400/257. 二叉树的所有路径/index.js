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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const ans = []
    const dfs = (root, s) => {
        if (root === null) return
        dfs(root.left, s + `->${root.val}`)
        dfs(root.right, s + `->${root.val}`)

        if (root.left === null && root.right === null) {
            ans.push(s + `->${root.val}`)
        }
    }
    dfs(root.left, `${root.val}`)
    dfs(root.right, `${root.val}`)
    if (root.left === null && root.right === null) ans.push(`${root.val}`)
    return ans
};
