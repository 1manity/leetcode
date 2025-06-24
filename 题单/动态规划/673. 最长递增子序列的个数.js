/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1)
    const cnt = new Array(nums.length).fill(1)
    let ans = 0, tmp= 0
    for (let i = 0; i < nums.length; i++) {
        let max = 0
        for (let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                if(dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1
                    cnt[i] = cnt[j]
                } else if(dp[j] + 1 === dp[i]){
                    cnt[i] += cnt[j]
                }
            }

        }
        if(dp[i] >ans) {
            ans = dp[i]
            tmp = cnt[i]
        } else if(dp[i] === ans) {
            tmp += cnt[i]
        }
    }
    // console.log(dp,cnt)
    return tmp

};
