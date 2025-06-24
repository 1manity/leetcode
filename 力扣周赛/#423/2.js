/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxIncreasingSubarrays = function(nums) {
//     const n = nums.length;
//     const dp = new Array(nums.length).fill(1);
//     for(let i = 1; i < n; i++) {
//         if(nums[i] > nums[i - 1]) {
//             dp[i] = dp[i - 1] + 1;
//         } else {
//             dp[i] = 1;
//         }
//     }
//     // console.log(dp);
//     let ans = 0;
//     for(let i = 0; i < n; i++) {
//         for(let k = 1; k<= Math.floor((n - i) / 2);k ++) {
//             if(dp[i + k] - dp[i] === dp[i + 2 * k + 1] - dp[i + k + 1]) {
//                 ans = Math.max(ans, k + 1);
//             }
//         }
//     }
//     return ans;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function(nums) {
    const n = nums.length;
    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);

    for(let i = 1; i < n; i++) {
        if(nums[i] > nums[i - 1]) {
            left[i] = left[i - 1] + 1;
        }
    }

    for(let i = n - 2; i >= 0; i--) {
        if(nums[i] < nums[i + 1]) {
            right[i] = right[i + 1] + 1;
        }
    }

    let ans = 0;
    // console.log(left, right);
    for(let i = 0; i < n - 1; i++) {
        
        let k = Math.min(left[i], right[i + 1]);
        ans = Math.max(ans, k);
        
    }

    return ans;
};

console.log(maxIncreasingSubarrays([2,5,7,8,9,2,3,4,3,1])); // Output: 3
console.log(maxIncreasingSubarrays([1,2,3,4,4,4,4,5,6,7])); // Output: 2
console.log(maxIncreasingSubarrays([1,2,3,3,4,5])); // Output: 3

// Q2 先预处理得到以每个位置结尾和开始的最长严格递增子数组长度，然后遍历所有位置，计算相邻位置的递增子数组长度的最小值，更新最大可能的 k 值。最后返回最大的可能的
