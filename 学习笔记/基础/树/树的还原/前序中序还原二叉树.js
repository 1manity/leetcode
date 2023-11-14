var first = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
var middle = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function f(first, middle) {
    // 检查输入数组是否有效
    if (first === null || middle === null || first.length === 0 || middle.length === 0 || first.length !== middle.length)
        return null;

    // 创建根节点，其值为先序遍历的第一个元素
    var root = new Node(first[0]);

    // 在中序遍历数组中找到根节点的位置
    var index = middle.indexOf(root.value);

    // 根据根节点在中序遍历中的位置，分割先序遍历数组，获取左右子树的先序遍历数组
    var firstLeft = first.slice(1, index + 1);
    var firstRight = first.slice(index + 1, first.length);

    // 分割中序遍历数组，获取左右子树的中序遍历数组
    var middleLeft = first.slice(0, index);
    var middleRight = first.slice(index + 1, middle.length);

    // 递归构建左右子树
    root.left = f(firstLeft, middleLeft);
    root.right = f(firstRight, middleRight);

    // 返回构建好的树
    return root;
}
