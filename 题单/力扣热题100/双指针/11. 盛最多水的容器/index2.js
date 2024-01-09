/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let ans = 0,left = 0,right = height.length -1
    while(left<right) {
        ans = Math.max((right-left)*Math.min(height[left],height[right]),ans)
        if (height[left] > height[right]) {
            right --
        } else {
            left ++
        }
    }
    return ans
};
