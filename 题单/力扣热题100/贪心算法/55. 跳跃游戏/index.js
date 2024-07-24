/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function (nums) {
//   const dp = new Array(nums.length).fill(false);
//   dp[0] = true;
//   for (let i = 0; i < nums.length; i++) {
//     const n = nums[i];
//     if (dp[i] === true) {
//       for (let j = 1; j <= n; j++) {
//         dp[i + j] = true;
//       }
//     }
//   }
//   return dp[nums.length - 1];
// };
var canJump = function (nums) {
  let mx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > mx) {
      return false;
    }
    mx = Math.max(mx, i + nums[i]);
  }
  return true;
};
