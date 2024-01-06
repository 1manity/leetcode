/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null) return 0
    const arr = [root]
    let ans = 0

    while (arr.length) {
        const length = arr.length
        for (let j = 0; j < length; j++) {
            const node = arr.shift()
            for (let i = 0; i < node.children.length; i++) {

                arr.push(node.children[i])
            }
        }
        ans++
    }
    return ans
};
