const maxDepth = (root) => {
    if (root == null) return 0;
    const queue = [root];
    let depth = 1;
    while (queue.length) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const cur = queue.shift();
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        if (queue.length) depth++;
    }
    return depth;
};
