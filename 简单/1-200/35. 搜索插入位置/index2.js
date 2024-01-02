// lowerBound 返回最小的满足 nums[i] >= target 的 i
// 如果数组为空，或者所有数都 < target，则返回 nums.length
// 要求 nums 是非递减的，即 nums[i] <= nums[i + 1]

// 闭区间写法
var lowerBound = function (nums, target) {
    let left = 0, right = nums.length - 1; // 闭区间 [left, right]
    while (left <= right) { // 区间不为空
        // 循环不变量：
        // nums[left-1] < target
        // nums[right+1] >= target
        const mid = left + ((right - left) >> 1);
        if (nums[mid] < target)
            left = mid + 1; // 范围缩小到 [mid+1, right]
        else
            right = mid - 1; // 范围缩小到 [left, mid-1]
    }
    return left; // 或者 right+1
}
