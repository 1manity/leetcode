/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const pre = new ListNode(-1, head);
    let num
    const dfs = (cur, curNumber) => {
        if (cur.next === null) {
            num = curNumber
            return
        }
        dfs(cur.next, curNumber + 1)
        if (num - curNumber === n) {
            cur.next = cur.next.next
        }
    }
    dfs(pre, 0)
    return pre.next
};
