/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const tmp = []
    let node =headA
    while (node !== null) {
        tmp.push(node)
        node = node.next
    }
    node = headB
    while (node !== null) {
        if (tmp.includes(node)) {
            return node
        }
        node = node.next
    }
    return null
};
