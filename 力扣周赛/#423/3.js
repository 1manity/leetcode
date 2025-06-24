/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfGoodSubsequences = function(nums) {
    const mod = 1e9 + 7;
    const countEndingAt = new Map();
    const sumEndingAt = new Map();

    for (const num of nums) {

        const prevCount = countEndingAt.get(num) || 0;
        const prevSum = sumEndingAt.get(num) || 0;

        countEndingAt.set(num, (prevCount + 1) % mod);
        sumEndingAt.set(num, (prevSum + num) % mod);


        for (const delta of [-1, 1]) {
            const prevValue = num + delta;
            if (countEndingAt.has(prevValue)) {
                const countPrev = countEndingAt.get(prevValue);
                const sumPrev = sumEndingAt.get(prevValue);

                countEndingAt.set(num, (countEndingAt.get(num) + countPrev) % mod);

                const additionalSum = (sumPrev + (countPrev * num) % mod) % mod;
                sumEndingAt.set(num, (sumEndingAt.get(num) + additionalSum) % mod);
            }
        }
    }

    let ans = 0;
    for (const sum of sumEndingAt.values()) {
        ans = (ans + sum) % mod;
    }

    return ans;
};
console.log(sumOfGoodSubsequences([1,2,1])); // Output: 14
console.log(sumOfGoodSubsequences([3, 4, 5])); // Output: 20
console.log(sumOfGoodSubsequences([1,2,3,2,1])); // Output: 40