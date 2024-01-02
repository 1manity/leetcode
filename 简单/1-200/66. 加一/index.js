/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1;
    while (i >= 0) {
        digits[i]++;
        if (digits[i] === 10) {
            digits[i] = 0;
            i--;
        } else {
            return digits;
        }
    }

    return [1,...digits];
};
