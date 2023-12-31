/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    for (let i = nums1.length - 1; i >= 0; i--) {
        // console.log(nums1)
        if (m<=0 || n<=0) {
            if (m>0) {
                nums1[i]= nums1[m-1]
                m--
                continue
            }
            else if (n>0) {
                nums1[i] = nums2[n-1]
                n--
                continue
            }
            else  {
                continue
            }
        }
        if(nums1[m-1]>nums2[n-1]) {
            nums1[i] = nums1[m-1]
            m--
        }
        else {
            nums1[i]= nums2[n-1]
            n--
        }
    }

};
