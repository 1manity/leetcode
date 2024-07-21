/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0,right = nums.length - 1
    let mid
    while (left < right ) {
        mid = left + (( right -left )>> 1)

        if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }

    }
    return nums[left]
};
