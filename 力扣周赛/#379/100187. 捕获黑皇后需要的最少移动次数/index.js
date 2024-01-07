/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} e
 * @param {number} f
 * @return {number}
 */
var minMovesToCaptureTheQueen = function(a, b, c, d, e, f) {
    if (a === e && (a!==c || (a===c && (d<Math.min(b,f) || d> Math.max(b,f))))) return 1
    if (b ===f && (b!==d || (b===d && (c<Math.min(a,e) || c> Math.max(a,e))))) return 1
    if (f-d === e-c && (b-d !== a-c || (b<Math.min(d,f)  || b> Math.max(d,f)))) return 1
    if (f-d === c-e && (b-d !== c-a || (b<Math.min(d,f)  || b> Math.max(d,f)))) return 1

    return 2
};
console.log(minMovesToCaptureTheQueen(a = 4, b = 3, c = 3, d = 4, e = 2, f = 5))
