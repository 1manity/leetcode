/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const heap = [{ n: Number.MAX_SAFE_INTEGER, val: null, pos: 0 }];
  const map = new Map();
  const leftChild = (pos) => pos * 2;
  const rightChild = (pos) => pos * 2 + 1;
  const parent = (pos) => Math.floor(pos / 2);
  const swap = (pos1, pos2) => {
    const tmp = heap[pos1];
    heap[pos1] = heap[pos2];
    heap[pos2] = tmp;

    heap[pos1].pos = pos1;
    heap[pos2].pos = pos2;
  };
  const downheapify = (pos) => {
    if (pos > heap.length - 1) return;

    if (
      (heap[leftChild(pos)] && heap[pos].n < heap[leftChild(pos)].n) ||
      (heap[rightChild(pos)] && heap[pos].n < heap[rightChild(pos)].n)
    ) {
      if (
        heap[rightChild(pos)] &&
        heap[leftChild(pos)].n < heap[rightChild(pos)].n
      ) {
        swap(pos, rightChild(pos));
        downheapify(rightChild(pos));
      } else {
        swap(pos, leftChild(pos));
        downheapify(leftChild(pos));
      }
    }
  };
  const upheapify = (pos) => {
    let tmp = heap[pos];
    while (pos > 0 && tmp.n > heap[parent(pos)].n) {
      swap(pos, parent(pos));
      pos = parent(pos);
    }
  };
  const insert = (val) => {
    if (!map.has(val)) {
      const obj = { n: 1, val, pos: heap.length };
      map.set(val, obj);
      heap.push(obj);
    } else {
      const obj = map.get(val);
      obj.n++;
      upheapify(obj.pos);
    }
  };
  const deleteMax = () => {
    const max = heap[1];
    heap[1] = heap[heap.length - 1];

    heap.length--;
    downheapify(1);
    return max;
  };

  for (let i = 0; i < nums.length; i++) {
    insert(nums[i]);
    // console.log(heap);
  }
  const ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(deleteMax().val);
  }
  return ans;
};
console.log(topKFrequent((nums = [3, 0, 1, 0]), (k = 1)));
