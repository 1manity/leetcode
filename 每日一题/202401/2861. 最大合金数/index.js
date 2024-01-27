var maxNumberOfAlloys = function(n, k, budget, composition, stock, cost) {
    let left = 1, right = 2e8, ans = 0;
    while (left <= right) {
        let mid = (left + right) >> 1;
        let valid = false;
        for (let i = 0; i < k; ++i) {
            let spend = 0;
            for (let j = 0; j < n; ++j) {
                spend += Math.max(composition[i][j] * mid - stock[j], 0) * cost[j];
            }
            if (spend <= budget) {
                valid = true;
                break;
            }
        }
        if (valid) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
};
