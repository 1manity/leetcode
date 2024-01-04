/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {

    const arr = new Array(1001).fill(0)
    const ans = []
    for(let i = 0;i<nums1.length;i++) {
        arr[nums1[i]] += 1
    }
    for(let i = 0;i<nums2.length;i++) {
        if(arr[nums2[i]] > 0)  {
            ans.push(nums2[i])
            arr[nums2[i]] --
        }
    }
    return ans

};
