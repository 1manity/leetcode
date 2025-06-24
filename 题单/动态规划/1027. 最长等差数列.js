/**
 * 给你一个整数数组 nums，返回 nums 中最长等差子序列的长度。

回想一下，nums 的子序列是一个列表 nums[i1], nums[i2], ..., nums[ik] ，且 0 <= i1 < i2 < ... < ik <= nums.length - 1。并且如果 seq[i+1] - seq[i]( 0 <= i < seq.length - 1) 的值都相同，那么序列 seq 是等差的。
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    const n = nums.length;
    if(n <= 2) return n;
    const dp = new Array(n).fill(0).map(() => new Map());

    let maxLen = 2;
    
    for(let i = 1; i < n; i++){
        for(let j = 0; j < i; j++){
            const diff = nums[i] - nums[j];
            const prevLen = dp[j].get(diff) || 1;
            const currentLen = prevLen + 1;
            dp[i].set(diff, Math.max(dp[i].get(diff) || 0, currentLen));
            maxLen = Math.max(maxLen, currentLen);
        }
    }
    return maxLen;
};