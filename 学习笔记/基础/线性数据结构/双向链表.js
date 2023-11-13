function DoublyLinkedList(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
}


// 添加新节点到尾部
DoublyLinkedList.prototype.append = function(value) {
    var newNode = new DoublyLinkedNode(value);
    if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    } else {
        this.head = this.tail = newNode;
    }
};

// 从头部删除节点
DoublyLinkedList.prototype.removeHead = function() {
    if (!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
};
// 从头部向后遍历
DoublyLinkedList.prototype.traverseForward = function() {
    var current = this.head;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
};

// 从尾部向前遍历
DoublyLinkedList.prototype.traverseBackward = function() {
    var current = this.tail;
    while (current) {
        console.log(current.value);
        current = current.prev;
    }
};
