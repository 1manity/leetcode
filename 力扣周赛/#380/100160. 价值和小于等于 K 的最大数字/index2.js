/**
 * @param {number} k
 * @param {number} x
 * @return {number}
 */
function findMaximumNumber(k, x) {
    let lowerBound = 0, upperBound = Math.pow(10, 18);
    let binaryThreshold = 1 << (x - 1);
    let doubleThreshold = 1 << x;

    while (lowerBound <= upperBound) {
        let mid = Math.floor((lowerBound + upperBound) / 2);
        let currentRange = binaryThreshold;
        let valueSum = 0;

        while (currentRange <= mid) {
            let completeCycles = Math.floor(mid / (2 * currentRange));
            let remainingNumbers = mid % (2 * currentRange);
            valueSum += completeCycles * currentRange + Math.max(0, remainingNumbers - currentRange + 1);
            currentRange *= doubleThreshold;
        }

        if (valueSum > k) {
            upperBound = mid - 1;
        } else {
            lowerBound = mid + 1;
        }
    }

    return upperBound;
}



console.log(findMaximumNumber(9, 1));
