/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])

    const ans = []
    let left = intervals[0][0],right = intervals[0][1]
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= right) {
            right = Math.max(right,intervals[i][1])
        }
        else {
            ans.push([left,right])
            left = intervals[i][0]
            right = intervals[i][1]
        }
    }
    ans.push([left,right])
    return ans
};
console.log(merge(intervals = [[1,4],[4,5]]))
