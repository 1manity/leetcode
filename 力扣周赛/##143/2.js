/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
// var maxFrequency = function(nums, k, numOperations) {
//     const map = new Map()
//     const numsMap = new Map()
//     for (const num of nums) {
//         for(let i = num - k; i <= num + k; i++) {
//             map.set(i, (map.get(i) || 0) + 1)
//         }
//     }
//     for (const num of nums) {
//         numsMap.set(num, (numsMap.get(num) || 0) + 1)
//     }
//     let ans = 0
//     for (const [k,v] of map) {
//         ans = Math.max(ans, Math.min(v, (numsMap.get(k) || 0) + numOperations))
//     }
//     return ans
// };


var maxFrequency = function(nums, k, numOperations) {
    if(nums.length === 1) return 1
    nums.sort((a, b) => a - b);
    const map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    let max = 1;
    let l = 0, r = 0;
    for (let i = 1; i <= 10 ** 5 + 5; i++) {
        while (i - nums[l] > Math.abs(k) ) {
            l++;
        }
        while ( nums[r] - i <= Math.abs(k)) {
            r++;
        }

        max = Math.max(max, Math.min(r - l , (map.get(i) || 0) + numOperations));
    }
    
    return max;
};
// var maxFrequency = function(nums, k, numOperations) { 
//     nums.sort((a, b) => a - b);
//     let l = 0, total = 0, max = 1;
    
//     for (let r = 0; r < nums.length; r++) {
//         total += nums[r];
        
//         while ((nums[r] * (r - l + 1)) - total > numOperations * k) {
//             total -= nums[l];
//             l++;
//         }
        
//         max = Math.max(max, r - l + 1);
//     }
    
//     return max;
// };
console.log(maxFrequency(nums = [1,4,5], k = 1, numOperations = 2))
console.log(maxFrequency(nums = [5,11,20,20], k = 5, numOperations = 1))
console.log(maxFrequency(nums = [1,4,5], k = 2, numOperations = 3))
console.log(maxFrequency(nums = [2,70,73], k = 39, numOperations = 2))
console.log(maxFrequency(nums = [1], k = 4, numOperations = 9))

console.log(2**31 , 10**9)