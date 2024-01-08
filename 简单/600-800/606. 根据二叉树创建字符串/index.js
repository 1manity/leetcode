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
 * @return {string}
 */
var tree2str = function(root) {
    let ans = ''

    const dfs = (root)=> {
        if (root === null) return
        ans += root.val
        if (root.left === null && root.right !== null) {
            ans +='()('
            dfs(root.right)
            ans +=')'
        } else if (root.left !== null && root.right === null) {
            ans +='('
            dfs(root.left)
            ans +=')'
        } else if (root.left !== null && root.right !== null){
            ans +='('
            dfs(root.left)
            ans +=')('
            dfs(root.right)
            ans +=')'
        }
    }
    dfs(root)
    return ans
};
