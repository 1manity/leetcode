var trap = function (height) {
    let ans = 0, left = 0, right = height.length - 1, preMax = 0, sufMax = 0;
    while (left < right) {
        preMax = Math.max(preMax, height[left]);
        sufMax = Math.max(sufMax, height[right]);
        if (preMax < sufMax) {
            ans += preMax - height[left++];
        } else {
            ans += sufMax - height[right--];
        }
    }
    return ans;
};
