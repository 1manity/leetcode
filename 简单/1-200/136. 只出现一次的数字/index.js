/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const bucket= []
    for (let i = -30000; i < 30000; i++) {
        bucket[`${i}`] = 0
    }
    for (const num of nums) {
        bucket[`${num-1}`] +=1
    }

    for (let i = -30000; i < 30000; i++) {
        if (bucket[`${i}`] === 1) {

            return i + 1
        }
    }
    new Error('No single number')
};

console.log(singleNumber([-1]))
