/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const ans = []
    const dfs = (root) => {
        if (root === null) {
             return
        }
        ans.push(root.val)

        for (const i of root.children) {
            dfs(i)
        }

    }
    dfs(root)
    return ans
};
