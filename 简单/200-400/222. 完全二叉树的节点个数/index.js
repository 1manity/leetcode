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
var countNodes = function(root) {
    if(root === null) return 0
    const arr = [root]
    let ans = 0
    while(arr.length!==0) {
        const node = arr.pop()
        ans++
        if(node.left) arr.push(node.left)
        if(node.right) arr.push(node.right)
    }
    return ans
};
