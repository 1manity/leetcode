var maximumSumOfHeights = function(maxHeights) {
    const n = maxHeights.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let pre = maxHeights[i], sum = maxHeights[i];
        for (let j = i - 1; j >= 0; j--) {
            pre = Math.min(pre, maxHeights[j]);
            sum += pre;
        }
        let suf = maxHeights[i];
        for (let j = i + 1; j < n; j++) {
            suf = Math.min(suf, maxHeights[j])
            sum += suf;
        }
        res = Math.max(res, sum);
    }
    return res;
};
