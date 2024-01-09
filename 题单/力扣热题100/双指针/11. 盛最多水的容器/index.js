/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let ans = 0
    const arr = new Array(height.length).fill(0)
    for (let i = 0; i < height.length; i++) {
        arr[i] = Math.max(i,height.length -1 -i) * height[i]
    }
    for (let i = 0; i < height.length; i++) {
        if (arr[i]<ans) continue
        for (let j = i + 1; j < height.length; j++) {
            if (arr[j]<ans) continue
            ans = Math.max(ans, Math.min(height[i],height[j]) * (j-i))
        }
    }
    return ans
};
