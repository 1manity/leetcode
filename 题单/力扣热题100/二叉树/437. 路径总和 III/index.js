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
 * @param {number} targetSum
 * @return {number}
 */
// var pathSum = function(root, targetSum) {
//     let ans = 0
//     const traversal = (root) => {
//         if (root === null) return null
//         dfs(root, 0)
//         traversal(root.left)
//         traversal(root.right)
//     }
//     const dfs = (root, nums)=> {
//         if (root === null) return null
//         if (targetSum === nums + root.val) ans ++
//         dfs(root.left,nums + root.val)
//         dfs(root.right, nums + root.val)
//     }
//     traversal(root)
//     return ans
// };

const pathSum = function(root, targetSum) {
    let ans = 0;
    const cnt = {0: 1}; // 把 s[0] = 0 统计进来
    function dfs(node, s) {
        if (node === null) {
            return;
        }
        s += node.val;
        ans += cnt[s - targetSum] ?? 0;
        cnt[s] = (cnt[s] ?? 0) + 1;
        dfs(node.left, s);
        dfs(node.right, s);
        cnt[s]--; // 恢复现场
    }
    dfs(root, 0);
    return ans;
};
