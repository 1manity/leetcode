/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const prefix = [height[0]],suffix= new Array(height.length).fill(0)

    for (let i = 1; i < height.length; i++) {
        prefix.push(Math.max(height[i],prefix[i-1]))
    }
    suffix[height.length - 1] = height[height.length - 1]

    for (let i =height.length - 2; i  >= 0; i--) {
        suffix[i] = Math.max(height[i],suffix[i+1])
    }

    let ans = 0
    for (let i = 0; i <height.length - 1; i++) {
        ans +=Math.min(prefix[i],suffix[i]) - height[i]
    }
    return ans
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
