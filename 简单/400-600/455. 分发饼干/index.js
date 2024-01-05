/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// var findContentChildren = function (g, s) {
//     g = g.sort((a, b) => b - a)
//     s = s.sort((a, b) => a - b)
//     let ans = 0
//     for (let i = 0; i < g.length; i++) {
//         for (let j = 0; j < s.length; j++) {
//             if (s[j] >= g[i]) {
//                 s = s.filter((item,index)=> {return index !==j})
//                 ans++
//                 break
//             }
//         }
//     }
//     return ans
// };
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    const m = g.length, n = s.length;
    let count = 0;
    for (let i = 0, j = 0; i < m && j < n; i++, j++) {
        while (j < n && g[i] > s[j]) {
            j++;
        }
        if (j < n) {
            count++;
        }
    }
    return count;
};

