/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const list = []
    let i=0,ans=true
    const dfs = (head)=>{
        if (head === null) {
            return
        }
        list.push(head.val)
        dfs(head.next)
        if (list[i] !== head.val) {
            ans = false
        }
        i++
    }
    dfs(head)
    return ans
};

