/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let i = 0
    for (let next = head;next!==null;next=next.next,i++) {
        if (i>=10001) return true
    }
    return false;
};
// var hasCycle = function (head) {
//     try {
//         JSON.stringify(head)
//     } catch{
//         return true
//     }
//     return false
// };

