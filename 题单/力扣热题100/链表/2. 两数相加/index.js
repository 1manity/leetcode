/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    const pre = new ListNode()
    let cur = pre

    while (l1 || l2 || carry) {
        if (l1) carry += l1.val
        if (l2) carry += l2.val
        cur.next = new ListNode(carry % 10)
        cur = cur.next
        carry = Math.floor(carry / 10)
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    return pre.next
};
