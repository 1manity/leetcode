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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (root === null) return []
    const arr = [root]
    const ans = []
    while (arr.length) {
        ans.push(arr[arr.length - 1].val)
        const length = arr.length
        for (let i = 0; i < length; i++) {
            const node = arr.shift()
            if (node.left) arr.push(node.left)
            if (node.right) arr.push(node.right)
        }

    }
    return ans
};
