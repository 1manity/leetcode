var binaryTreePaths = function (root) {
    const ans = []
    const dfs = (root, s) => {
        if (root === null) return
        if (root.left === null && root.right === null) {
            ans.push(s + `${root.val}`)
            return
        }
        s+= `${root.val}->`
        dfs(root.left, s)
        dfs(root.right, s)
    }
    dfs(root,'')
    return ans
};
