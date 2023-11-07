/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    if(x<10) return true;
    let n = 10 ** Math.floor(Math.log10(x));
    while(n>1 && x>0) {
        if(x%10 !== Math.floor(x/n)) {
            return false;
        }
        x = Math.floor((x%n)/10);
        n = n/100;
    }
    return true;
};