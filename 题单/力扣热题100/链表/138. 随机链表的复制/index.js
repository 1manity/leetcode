/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    const map = new Map()
    let node = head
    while (node) {
        map.set(node,new _Node(node.val))
        node = node.next
    }
    node = head
    while (node) {
        const tmpNode = map.get(node)
        tmpNode.next = map.get(node.next) || null
        tmpNode.random = map.get(node.random) || null
        node = node.next
    }
    return map.get(head) || null
};
