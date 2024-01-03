
var MyQueue = function() {
    this.queue = []
    this._queue = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while (!this.empty()) {
        this._queue.push(this.queue.pop())
    }
    const x = this._queue.pop()
    while (this._queue.length) {
        this.queue.push(this._queue.pop())
    }
    return x
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while (!this.empty()) {
        this._queue.push(this.queue.pop())
    }
    const x = this._queue[this._queue.length-1]
    while (this._queue.length) {
        this.queue.push(this._queue.pop())
    }
    return x
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.queue.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
