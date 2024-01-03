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
var reverseList = function(head) {
    if(head === null) return null
    const reverse = (prev,next)=> {
        if(next) {
            const node = reverse(next,next.next)
            next.next = prev
            prev.next = null
            return node
        }
        else {
            return prev
        }
    }
    return reverse(head,head.next)
};
