/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const happyN = new Set()
    let happyNumber = 0,tmp = n
    while(1) {


        happyNumber = 0
        while(tmp>0) {
            happyNumber+= (tmp%10)**2
            tmp=Math.floor(tmp/10)
        }
        if (happyNumber === 1) return true
        if (happyN.has(happyNumber)) return false
        happyN.add(happyNumber)
        tmp = happyNumber
    }
};
console.log(isHappy(19))
