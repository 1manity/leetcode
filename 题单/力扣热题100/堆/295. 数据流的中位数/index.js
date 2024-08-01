
var MedianFinder = function() {
        // 大顶堆 放小的那一半数字
        this.maxHeap = new Heap((a, b) => a > b);
        // 小顶堆 放大的那一半数字
        this.minHeap = new Heap((a, b) => a < b);

};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (!this.maxHeap.size || num < this.maxHeap.peek()) {
        this.maxHeap.push(num);
    } else {
        this.minHeap.push(num);
    }
    // 维护两个堆的平衡
    if (this.maxHeap.size - this.minHeap.size > 1) {
        this.minHeap.push(this.maxHeap.pop());
    } else if (this.minHeap.size > this.maxHeap.size) {
        this.maxHeap.push(this.minHeap.pop());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if ((this.maxHeap.size + this.minHeap.size) % 2 === 0) {
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    }
    return this.maxHeap.peek();
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

class Heap {
    constructor(compare) {
        this.arr = [0]
        this.compare = compare ? compare : (a, b) => a > b;
    }

    get size() {
        return this.arr.length - 1
    }
    leftChild(pos) {
        return pos * 2
    }
    rightChild(pos) {
        return pos * 2 + 1
    }

    parent(pos) {
        return Math.floor(pos / 2)
    }
    swap(pos1,pos2) {
        const tmp = this.arr[pos1]
        this.arr[pos1] = this.arr[pos2]
        this.arr[pos2] = tmp
    }
    downHeapify(pos) {
        if (this.leftChild(pos) <= this.size) {
            let largerChild = this.leftChild(pos);
            if (this.rightChild(pos) <= this.size && this.compare(this.arr[this.rightChild(pos)], this.arr[this.leftChild(pos)])) {
                largerChild = this.rightChild(pos);
            }
            if (this.compare(this.arr[largerChild], this.arr[pos])) {
                this.swap(pos, largerChild);
                this.downHeapify(largerChild);
            }
        }
    }

    upHeapify(pos) {
        while (pos > 1 && this.compare(this.arr[pos],this.arr[this.parent(pos)])) {
            this.swap(this.parent(pos), pos);
            pos = this.parent(pos); // 更新 k 的位置为父元素的位置（交换了位置）
        }
    }
    peek() {
        return this.arr[1];
    }
    push(val) {
        this.arr.push(val)
        this.upHeapify(this.size)
    }
    pop() {
        if (this.arr.length === 1) return null;
        this.swap(1, this.size);// 将结尾元素和堆顶元素交换位置
        let head = this.arr.pop(); // 删除堆顶
        this.downHeapify(1); // 再做下沉操作
        return head;

    }
}
