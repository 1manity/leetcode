/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    const pre = new ListNode(-1, head);
    let preHead = pre;
    while (head && head.next) {
        preHead.next = head.next;
        let temp = head.next;
        head.next = temp.next;
        temp.next = head;


        preHead = head
        head = head.next;

    }
    return pre.next;
};
