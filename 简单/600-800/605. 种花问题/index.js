/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let ans = 0
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            if (i - 1 >= 0 && flowerbed[i - 1] === 1) {
                continue
            }
            if (i + 1 < flowerbed.length && flowerbed[i + 1] === 1) {
                continue
            }
            ans++
            flowerbed[i] = 1
        }
    }
    return ans >= n
};
