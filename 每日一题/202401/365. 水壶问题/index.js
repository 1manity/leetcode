/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function (jug1Capacity, jug2Capacity, targetCapacity) {

    const gcd = (a, b) => {
        let remainder = a % b;
        while (remainder !== 0) {
            a = b;
            b = remainder;
            remainder = a % b;
        }
        return b;
    }
    if (jug1Capacity + jug2Capacity < targetCapacity) {
        return false;
    }
    if (jug1Capacity === 0 || jug2Capacity === 0) {
        return targetCapacity === 0 || jug1Capacity + jug2Capacity === targetCapacity;
    }
    return targetCapacity % gcd(jug1Capacity, jug2Capacity) === 0;
};
