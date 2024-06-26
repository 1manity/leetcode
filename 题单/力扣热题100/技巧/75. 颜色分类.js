/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(nums) {
//     const bucket = new Array(3).fill(0)
//     for (let i = 0; i < nums.length; i++) {
//         bucket[nums[i]] ++
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (i< bucket[0]) {
//             nums[i] = 0
//         } else if (i < bucket[0] + bucket[1]) {
//             nums[i] = 1
//         } else {
//             nums[i] = 2
//         }
//     }
// };
//  0、 1 和 2 分别表示红色、白色和蓝色。
// 我们可以设置 3 个指针，一个指向头部，一个指向尾部，还有一个指向当前遍历的元素。
// 我们从头部开始遍历数组，如果遇到 0（红色）就把它放到头部指针的位置，
// 如果遇到 2（蓝色）就把它放到尾部指针的位置。
// 如果遇到 1（白色），就跳过它，继续遍历。
var sortColors = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    for (let i = 0; i <= right; i++) {
        if (nums[i] === 0) {
            swap(nums, i, left);
            left++;
        } else if (nums[i] === 2) {
            swap(nums, i, right);
            right--;
            i--;
        }
    }
};

function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
