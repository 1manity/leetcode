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
var sumOfLeftLeaves = function(root) {
    let ans = 0
    const dfs = (root,direction)=> {
        if(root.left === null && root.right === null && direction === 0) {
            ans +=root.val
        }
        if(root.left) {
            dfs(root.left,0)
        }
        if(root.right ) {
            dfs(root.right,1)
        }
    }
    if(root.left) dfs(root.left,0)
    if(root.right) dfs(root.right,1)

    return ans
};
