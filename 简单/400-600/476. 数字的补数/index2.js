/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let t = num;
    t |= t >> 1;
    t |= t >> 2;
    t |= t >> 4;
    t |= t >> 8;
    t |= t >> 16;
    return ~num & t;
};
console.log(findComplement(2))
