/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = Number.MAX_SAFE_INTEGER
    const dp = []
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] - minPrice < 0)  {
            dp[i] = 0
        }
        minPrice = minPrice< prices[i]?minPrice:prices[i]
        dp[i] = dp[i]> prices[i] - minPrice?dp[i]:prices[i] - minPrice
    }
    return Math.max(...dp)
};

console.log(maxProfit([7,6,4,3,2,1]))
