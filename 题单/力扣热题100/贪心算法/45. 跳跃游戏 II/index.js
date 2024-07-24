/**
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function (nums) {
//   const dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
//   dp[0] = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const n = nums[i];
//     if (dp[i] >= 0) {
//       for (let j = 1; j <= n; j++) {
//         dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
//       }
//     }
//   }
//   return dp[nums.length - 1];
// };

var jump = function (nums) {
  var curDistance = 0;
  var nextDistance = 0;
  var step = 0;
  for (var i = 0; i < nums.length - 1; i++) {
    nextDistance = Math.max(nextDistance, nums[i] + i);
    if (curDistance === i) {
      step++;
      curDistance = nextDistance;
    }
  }
  return step;
};
