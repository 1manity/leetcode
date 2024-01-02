/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0||(!(x%10)&&x)) return false;
    let xx = x , cnt = 0;
    while(xx) {
        cnt = cnt*10 + xx%10;
        xx = ~~(xx/10)
    }
    return cnt === x;
};