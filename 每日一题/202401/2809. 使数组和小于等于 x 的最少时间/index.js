/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} x
 * @return {number}
 */
var minimumTime = function(nums1, nums2, x) {
    const n = nums1.length;
    const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
    const nums = nums1.map((a, i) => ({ a, b: nums2[i] }));
    nums.sort((a, b) => a.b - b.b);

    for (let j = 1; j <= n; j++) {
        const {a, b} = nums[j - 1];
        for (let i = j; i > 0; i--) {
            dp[j][i] = Math.max(dp[j - 1][i], dp[j - 1][i - 1] + i * b + a);
        }
    }

    const s1 = nums1.reduce((sum, num) => sum + num, 0);
    const s2 = nums2.reduce((sum, num) => sum + num, 0);
    for (let i = 0; i <= n; i++) {
        if (s2 * i + s1 - dp[n][i] <= x) {
            return i;
        }
    }
    return -1;

};
