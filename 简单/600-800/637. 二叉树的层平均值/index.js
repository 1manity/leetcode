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
var averageOfLevels = function (root) {
    const arr = [root]
    const ans = []
    while (arr.length > 0) {
        const length = arr.length
        let cnt = 0
        for (let i = 0; i < length; i++) {
            const tmp = arr.shift()
            cnt +=tmp.val
            if (tmp.left !== null) arr.push(tmp.left)
            if (tmp.right !== null) arr.push(tmp.right)
        }
        ans.push(cnt/length)
    }
    return ans
};
