var isBalanced = function(root) {
    let result = true
    const dfs = (root) => {
        if (root === null) return 0
        const left = dfs(root.left)
        const right = dfs(root.right)
        if (!result || Math.abs(left-right)>=2) {
            result = false
            return 0
        }
        return Math.max(left,right) + 1
    }
    dfs(root)
    return result
};
