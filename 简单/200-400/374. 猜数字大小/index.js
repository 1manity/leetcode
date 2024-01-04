/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 0,right = n
    while(left <= right) {
        const tmp = Math.floor((right - left) / 2) + left
        if(guess(tmp) < 0) {
            right = tmp - 1
        }
        else if(guess(tmp) > 0) {
            left = tmp + 1
        }
        else {
            return tmp
        }
    }
};
