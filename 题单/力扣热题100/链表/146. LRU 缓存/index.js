/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.dummyNode = new Node(null, 0);
};
function Node(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
  this.prev = null;
}
LRUCache.prototype.delOneNode = function (delNode) {
  if (delNode === null) return;
  if (delNode.next === this.dummyNode && delNode.prev === this.dummyNode) {
    this.dummyNode.next = null;
    this.dummyNode.prev = null;
  } else {
    delNode.next && (delNode.next.prev = delNode.prev);
    delNode.prev && (delNode.prev.next = delNode.next);
  }

  delNode.next = null;
  delNode.prev = null;

  this.map.delete(delNode.key);
};
LRUCache.prototype.insertOneNode = function (newNode) {
  if (this.dummyNode.next === null && this.dummyNode.prev === null) {
    this.dummyNode.next = newNode;
    this.dummyNode.prev = newNode;
    newNode.next = this.dummyNode;
    newNode.prev = this.dummyNode;
  } else {
    this.dummyNode.next.prev = newNode;
    newNode.next = this.dummyNode.next;
    this.dummyNode.next = newNode;
    newNode.prev = this.dummyNode;
  }

  this.map.set(newNode.key, newNode);
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  //   console.log(this.map);
  if (this.map.has(key)) {
    const delNode = this.map.get(key);
    const value = delNode.value;
    this.delOneNode(delNode);
    const newNode = new Node(key, delNode.value);
    this.insertOneNode(newNode);
    return value;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    const delNode = this.map.get(key);
    this.delOneNode(delNode);
  }
  if (this.map.size >= this.capacity) {
    const delNode = this.dummyNode.prev;
    this.delOneNode(delNode);
    // console.log("//////////////delOneNode", delNode);
    // console.log(this.map);
    // console.log("//////////////delOneNode");
  }
  const newNode = new Node(key, value);
  this.insertOneNode(newNode);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
