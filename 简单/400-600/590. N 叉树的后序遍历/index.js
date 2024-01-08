/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const ans = []
    const dfs = (root) => {
        if (root === null) {
             return
        }

        for (const i of root.children) {
            dfs(i)
        }
        ans.push(root.val)
    }
    dfs(root)
    return ans
};
