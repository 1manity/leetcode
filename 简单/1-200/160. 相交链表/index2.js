var getIntersectionNode = function(headA, headB) {
    let node1 = headA;
    let node2 = headB;
    while(node1 !== node2) {//一起移动,遍历完自己的链表就去遍历对方的链表
        node1 = node1 === null ? headB : node1.next;
        node2 = node2 === null ? headA : node2.next;
    }
    return node1;//有交点，会在交点相遇，返回交点；无交点，会在对方链表最后一个结点指向的null"相遇",返回null
};

