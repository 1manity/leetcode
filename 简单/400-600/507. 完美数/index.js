/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    if (num === 1) return false
    const n = [1]
    for (let i = 2; i < Math.sqrt(num); i++)
        if (num % i === 0)
            n.push(i,num / i)
    let cnt = 0
    for (const i of n)
        cnt += i
    return cnt === num
};
