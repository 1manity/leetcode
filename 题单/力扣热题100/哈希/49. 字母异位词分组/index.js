/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function(strs) {
//
//     const ans = []
//     const arr = new Array(strs.length).fill(0)
//     for (let i = 0; i < strs.length; i++) {
//         if (arr[i] === 1) continue
//         const map = new Map()
//         const ansi = [strs[i]]
//         for (const item of strs[i]) {
//             map.set(item,(map.get(item)||0) + 1)
//         }
//         for (let j = i + 1; j < strs.length; j++) {
//             if (arr[j] === 1) continue
//             const tmp = new Map(map)
//             let flag = true
//             for (const item of strs[j]) {
//                 if (!tmp.has(item)) {
//                     flag = false
//                     break
//                 }
//                 else if (tmp.get(item) <=0) {
//                     flag = false
//                     break
//                 }
//                 else tmp.set(item,tmp.get(item) - 1)
//             }
//             for (const [_,v] of tmp) {
//                 if (v!==0) flag = false
//             }
//             if (flag) {
//                 arr[j] = 1
//                 ansi.push(strs[j])
//             }
//         }
//         ans.push(ansi)
//     }
var groupAnagrams = function(strs) {

    const ans = []
    const map = new Map()
    const book = new Array(strs.length).fill(0)
    for (const str of strs) {
        const tmpMap = new Map()
        for (const i of str) {
            tmpMap.set(i,(tmpMap.get(i)||0) + 1)
        }
        map.set(str,tmpMap)
    }

    for (let i = 0; i < strs.length; i++) {
        if (book[i] === 1) continue
        const mapi = map.get(strs[i])
        const ansi = [strs[i]]
        for (let j = i+1; j < strs.length; j++) {
            if (book[j] === 1) continue
            const mapj = map.get(strs[j])
            let flag = true
            if (mapi.size !== mapj.size) continue
            for (const [k,v] of mapi) {
                if (mapj.get(k) !== v) {
                    flag = false
                    break
                }
            }
            if (flag) {
                book[j] = 1
                ansi.push(strs[j])
            }
        }
        if (ansi.length>0)
            ans.push(ansi)
    }
    return ans
};
console.log(groupAnagrams(["","c"]))
