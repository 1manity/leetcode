/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = []
    const map = new Map()
    for (let i = nums2.length - 1;i>=0;i--) {
        while (stack.length && nums2[i] >= stack[stack.length - 1]) {
            stack.pop()
        }
        map.set(nums2[i],stack.length?stack[stack.length - 1]:-1)
        stack.push(nums2[i])
    }
    return new Array(nums1.length).fill(0).map((_,i)=> {return map.get(nums1[i])})
};
