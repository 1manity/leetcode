var maxFrequency = function(nums, k, numOperations) {
    // Count the frequency of each number
    const freqMap = new Map();
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    // Sort the array
    nums.sort((a, b) => a - b);
    let ans = 0;
    
    for (const num of nums) {
        // First range: [num - k, num + k]
        let l = lowerBound(nums, num - k);
        let r = upperBound(nums, num + k);
        let countInRange = r - l - freqMap.get(num);
        let freqWithNum = Math.min(countInRange, numOperations) + freqMap.get(num);
        ans = Math.max(ans, freqWithNum);
        
        // Second range: [num, num + 2k]
        let l2 = lowerBound(nums, num);
        let r2 = upperBound(nums, num + 2 * k);
        let countInRange2 = r2 - l2;
        let freqWithNum2 = Math.min(countInRange2, numOperations);
        ans = Math.max(ans, freqWithNum2);
    }
    return ans;
};

// Helper function to find the lower bound index
function lowerBound(arr, target) {
    let left = 0, right = arr.length;
    while (left < right) {
        let mid = (left + right) >> 1;
        if (arr[mid] < target) left = mid + 1;
        else right = mid;
    }
    return left;
}

// Helper function to find the upper bound index
function upperBound(arr, target) {
    let left = 0, right = arr.length;
    while (left < right) {
        let mid = (left + right) >> 1;
        if (arr[mid] <= target) left = mid + 1;
        else right = mid;
    }
    return left;
}
