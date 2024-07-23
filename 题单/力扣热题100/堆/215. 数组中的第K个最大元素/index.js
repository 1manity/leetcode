/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function (nums, k) {
//   const bucket = new Array(20001).fill(0);
//   for (let i = 0; i < nums.length; i++) {
//     bucket[nums[i] + 10000]++;
//   }
//   let tmp = 0;
//   for (let i = bucket.length - 1; i >= 0; i--) {
//     if (bucket[i] !== 0) {
//       tmp += bucket[i];
//       if (tmp >= k) {
//         return i - 10000;
//       }
//     }
//   }
//   return -1;
// };
var findKthLargest = function (nums, k) {
  const heap = [Number.MAX_SAFE_INTEGER];
  let size = 0;
  const parent = (pos) => Math.floor(pos / 2);
  const leftChild = (pos) => 2 * pos;
  const rightChild = (pos) => 2 * pos + 1;
  const swap = (pos1, pos2) => {
    const tmp = heap[pos1];
    heap[pos1] = heap[pos2];
    heap[pos2] = tmp;
  };
  const downheapify = (pos) => {
    //checking if the node is a leaf node
    if (pos > size / 2 && pos <= size) {
      return;
    }
    //checking if a swap is needed
    if (heap[pos] < heap[leftChild(pos)] || heap[pos] < heap[rightChild(pos)]) {
      if (
        rightChild(pos) > size ||
        heap[leftChild(pos)] > heap[rightChild(pos)]
      ) {
        swap(pos, leftChild(pos));
        downheapify(leftChild(pos));
      } else {
        swap(pos, rightChild(pos));
        downheapify(rightChild(pos));
      }
    }
  };
  const upheapify = (pos) => {
    let tmp = heap[pos];
    while (pos > 0 && tmp > heap[parent(pos)]) {
      heap[pos] = heap[parent(pos)];
      pos = parent(pos);
    }
    heap[pos] = tmp;
  };
  const insert = (val) => {
    size++;
    heap.push(val);
    upheapify(size);
  };
  const deleteMax = () => {
    const max = heap[1];
    heap[1] = heap[size];
    size--;
    heap.length--;
    downheapify(1);
    return max;
  };

  for (let i = 0; i < nums.length; i++) {
    insert(nums[i]);
  }
  for (let i = 0; i < k - 1; i++) {
    deleteMax();
  }
  return deleteMax();
};
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 9));
