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
var getMinimumDifference = function(root) {
    let ans = Number.MAX_SAFE_INTEGER,num = -1

    const dfs = (root)=> {
        if (root === null) return
        dfs(root.left)
        if (num !== -1) {
            console.log(root.val)
            ans = Math.min(ans,Math.abs(root.val-num))
        }
        num = root.val
        dfs(root.right)
    }
    dfs(root)
    return ans
};
