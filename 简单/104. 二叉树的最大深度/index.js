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
var maxDepth = function(root) {
    if (root === null) return 0
    let bfsList = []
    let cnt = 0
    bfsList.push(root)
    const bfs = () => {

        cnt ++
        const tmpl = []
        for (const i of bfsList) {
            if (i.left) tmpl.push(i.left)
            if (i.right) tmpl.push(i.right)
        }
        bfsList = tmpl
        if (bfsList.length === 0) return
        bfs()
    }
    bfs()
    return cnt
};
