var last = ['f', 'g', 'c', 'd', 'e', 'b', 'a'];
var middle = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function f(last, middle) {
    // 检查输入数组是否有效
    if (last === null || middle === null || last.length === 0 || middle.length === 0 || last.length !== middle.length)
        return null;

    // 创建根节点，其值为后序遍历的最后一个元素
    var root = new Node(last[last.length - 1]);

    // 在中序遍历数组中找到根节点的位置
    var index = middle.indexOf(root.value);

    // 根据根节点在中序遍历中的位置，分割后序遍历数组，获取左右子树的后序遍历数组
    var lastLeft = first.slice(0, index);
    var lastRight = first.slice(index + 1, first.length);

    // 分割中序遍历数组，获取左右子树的中序遍历数组
    var middleLeft = first.slice(0, index);
    var middleRight = first.slice(index + 1, middle.length);

    // 递归构建左右子树
    root.left = f(lastLeft, middleLeft);
    root.right = f(lastRight, middleRight);

    // 返回构建好的树
    return root;
}
