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
var sortList = function (head) {
  if (head === null) {
    return head;
  }
  let length = 0;
  let cur = head;
  while (cur !== null) {
    cur = cur.next;
    length++;
  }
  const dummyHead = new ListNode(0, head);
  for (let l = 1; l < length; l <<= 1) {
    let prev = dummyHead,
      cur = dummyHead.next;
    while (cur !== null) {
      let head1 = cur;
      for (let i = 1; i < l && cur.next !== null; i++) {
        cur = cur.next;
      }
      let head2 = cur.next;
      cur.next = null;
      cur = head2;
      for (let i = 1; i < l && cur !== null && cur.next !== null; i++) {
        cur = cur.next;
      }
      let next = null;
      if (cur !== null) {
        next = cur.next;
        cur.next = null;
      }
      const merged = merge(head1, head2);
      prev.next = merged;
      while (prev.next !== null) {
        prev = prev.next;
      }
      cur = next;
    }
  }
  return dummyHead.next;
};
const merge = (head1, head2) => {
  const dummyHead = new ListNode(0);
  let temp = dummyHead,
    temp1 = head1,
    temp2 = head2;
  while (temp1 !== null && temp2 !== null) {
    if (temp1.val <= temp2.val) {
      temp.next = temp1;
      temp1 = temp1.next;
    } else {
      temp.next = temp2;
      temp2 = temp2.next;
    }
    temp = temp.next;
  }
  if (temp1 !== null) {
    temp.next = temp1;
  } else if (temp2 !== null) {
    temp.next = temp2;
  }
  return dummyHead.next;
};
