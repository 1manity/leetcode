/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let k=0,j=1, ans
    for (let i=0;i<n;i++) {
        let tmp = j
        j = j+k
        k = tmp
    }
    return k
};

