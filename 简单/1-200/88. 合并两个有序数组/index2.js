var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1, p = m + n - 1;
    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p--] = nums1[p1--]; // 填入 nums1[p1]
        } else {
            nums1[p--] = nums2[p2--]; // 填入 nums2[p1]
        }
    }
};
