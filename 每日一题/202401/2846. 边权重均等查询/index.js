var find = function(uf, i) {
    if (uf[i] === i) {
        return i;
    }
    uf[i] = find(uf, uf[i]);
    return uf[i];
}

var minOperationsQueries = function(n, edges, queries) {
    const m = queries.length;
    const W = 26;
    const neighbors = new Array(n).fill(null).map(() => new Map());

    for (const edge of edges) {
        neighbors[edge[0]].set(edge[1], edge[2]);
        neighbors[edge[1]].set(edge[0], edge[2]);
    }

    const queryArr = new Array(n).fill(null).map(() => []);
    for (let i = 0; i < m; i++) {
        queryArr[queries[i][0]].push([queries[i][1], i]);
        queryArr[queries[i][1]].push([queries[i][0], i]);
    }

    const count = new Array(n).fill(null).map(() => new Array(W + 1).fill(0));
    const visited = new Array(n).fill(0);
    const uf = new Array(n).fill(0);
    const lca = new Array(m).fill(0);

    const tarjan = (node, parent) => {
        if (parent !== -1) {
            count[node] = [...count[parent]];
            count[node][neighbors[node].get(parent)] += 1;
        }
        uf[node] = node;

        for (const [child, weight] of neighbors[node]) {
            if (child == parent) {
                continue;
            }
            tarjan(child, node);
            uf[child] = node;
        }

        for (const [node1, index] of queryArr[node]) {
            if (node !== node1 && !visited[node1]) {
                continue;
            }
            lca[index] = find(uf, node1);
        }
        visited[node] = 1;
    };

    tarjan(0, -1);
    const res = new Array(m).fill(0);
    for (let i = 0; i < m; i++) {
        let totalCount = 0;
        let maxCount = 0;
        for (let j = 1; j <= W; j++) {
            const t = count[queries[i][0]][j] + count[queries[i][1]][j] - 2 * count[lca[i]][j];
            maxCount = Math.max(maxCount, t);
            totalCount += t;
        }
        res[i] = totalCount - maxCount;
    }

    return res;
};
