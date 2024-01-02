const hasCycle = function(head) {
    while (head) {
        if (head.tag) {
            return true;
        }
        head.tag = true;
        head = head.next;
    }
    return false;
};
