/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 0, right = num
    while(left <= right) {
        const tmp = Math.floor((right - left) / 2) +left
        if(tmp * tmp > num) {
            right = tmp - 1
        }
        else if(tmp * tmp < num){
            left = tmp + 1
        }
        else
            return true
    }
    return false
};
