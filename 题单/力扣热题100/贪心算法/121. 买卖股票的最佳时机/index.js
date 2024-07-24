/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let ans = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    ans = Math.max(ans, prices[i] - min);
  }
  return ans;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
