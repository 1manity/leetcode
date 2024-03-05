/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    const pioneer = new ListNode(-1, head)
    const changeNode = (head, tail) => {
        let prev = tail.next

        let node = head
        while (prev !== tail) {
            const nodeNext = node.next
            node.next = prev
            prev = node
            node = nodeNext
        }
        return [tail, head]
    }

    let pre = pioneer
    while (head) {
        let tail = pre
        for (let i = 0; i < k; i++) {
            tail = tail.next
            if (!tail) {
                return pioneer.next
            }
        }
        const next = tail.next;
        [head, tail] = changeNode(head, tail)

        pre.next = head
        tail.next = next
        pre = tail
        head = tail.next
    }
    return pioneer.next
};
