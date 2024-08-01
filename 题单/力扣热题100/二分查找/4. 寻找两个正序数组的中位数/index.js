/**
 * 二分解法
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortedArrays = function(nums1, nums2) {
//     // make sure to do binary search for shorten array
//     if (nums1.length > nums2.length) {
//         [nums1, nums2] = [nums2, nums1]
//     }
//     const m = nums1.length
//     const n = nums2.length
//     let low = 0
//     let high = m
//     while(low <= high) {
//         const i = low + Math.floor((high - low) / 2)
//         const j = Math.floor((m + n + 1) / 2) - i
//
//         const maxLeftA = i === 0 ? -Infinity : nums1[i-1]
//         const minRightA = i === m ? Infinity : nums1[i]
//         const maxLeftB = j === 0 ? -Infinity : nums2[j-1]
//         const minRightB = j === n ? Infinity : nums2[j]
//
//         if (maxLeftA <= minRightB && minRightA >= maxLeftB) {
//             return (m + n) % 2 === 1
//                 ? Math.max(maxLeftA, maxLeftB)
//                 : (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
//         } else if (maxLeftA > minRightB) {
//             high = i - 1
//         } else {
//             low = low + 1
//         }
//     }
// };

var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const isEven = totalLength % 2 === 0;

    // 辅助函数，用来在合并后的数组中找到第 k 小的元素
    const findKth = (k) => {
        let index1 = 0, index2 = 0;

        while (true) {
            // console.log(index1,index2,k)
            if (index1 === nums1.length) return nums2[index2 + k];
            if (index2 === nums2.length) return nums1[index1 + k];
            if (k === 0) return Math.min(nums1[index1], nums2[index2]);

            const halfK = Math.floor((k - 1) / 2) ;
            const newIndex1 = Math.min(index1 + halfK, nums1.length - 1);
            const newIndex2 = Math.min(index2 + halfK, nums2.length - 1);

            if (nums1[newIndex1] <= nums2[newIndex2]) {
                k -= (newIndex1 - index1 + 1);
                index1 = newIndex1 + 1;
            } else {
                k -= (newIndex2 - index2 + 1);
                index2 = newIndex2 + 1;
            }
        }
    };

    if (isEven) {
        // 如果数组长度是偶数，中位数是第 (totalLength / 2 - 1) 和 totalLength / 2 个元素的平均值
        return (findKth(Math.floor(totalLength / 2) - 1) + findKth(Math.floor(totalLength / 2))) / 2;
    } else {
        // 如果数组长度是奇数，中位数是第 totalLength / 2 个元素
        return findKth(Math.floor(totalLength / 2));
    }
};


console.log(findMedianSortedArrays([0,0,0,0,0],[-1,0,0,0,0,0,1]))
