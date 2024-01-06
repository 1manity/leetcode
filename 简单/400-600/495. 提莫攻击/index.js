/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let ans = 0, t = 0, timeline = 0

    for (let i = 0; i < timeSeries.length; i++) {

        ans += timeSeries[i] - timeline > t ? t : timeSeries[i] - timeline
        t = duration
        timeline = timeSeries[i]

    }

    return t > 0 ? ans += t : ans
};
console.log(findPoisonedDuration([1, 2], 2))
// if (timeSeries[i] - timeline > t) {
//     ans +=t
//     t = duration
//     timeline = timeSeries[i]
// }
// else {
//     ans += timeSeries[i] - timeline
//     t = duration
//     timeline = timeSeries[i]
// }
