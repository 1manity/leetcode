/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length) return null
    const node =new TreeNode()
    node.val = preorder[0]
    const idx = inorder.findIndex((v)=>v === preorder[0])
    node.left = buildTree(preorder.slice(1,idx + 1),inorder.slice(0,idx))
    node.right = buildTree(preorder.slice(idx+1),inorder.slice(idx + 1))
    return node
};

