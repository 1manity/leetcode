function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

var a = new Node('a')
var b = new Node('b')
var c = new Node('c')
var d = new Node('d')
var e = new Node('e')
var f = new Node('f')
var g = new Node('g')
var h = new Node('h')
var j = new Node('j')

a.left = b;
a.right = c;
b.left = d;
// b.right = e;
c.left = f;
c.right = g;
d.right = h;
// e.right = j;

function getDeep(root) {
    if (root === null) return 0
    var left = getDeep(root.left)
    var right = getDeep(root.right)

    return Math.max(left,right) + 1
}
function isBalance(root) {
    if (root === null) return true
    var left = getDeep(root.left)
    var right = getDeep(root.right)
    if (Math.abs(left - right) > 1) {
        return false
    } else {
        return isBalance(root.left )&& isBalance(root.right)
    }
}
function leftRotate(root) {
    var newRoot = root.right
    var changeTree =root.right.left
    root.right = changeTree
    newRoot.left = root
    return newRoot
}
function rightRotate(root) {
    var newRoot = root.left
    var changeTree =root.left.right
    root.left = changeTree
    newRoot.right = root
    return newRoot
}
function change(root) {
    if (isBalance(root)) return root
    if (root.left !== null) change(root.left)
    if (root.right !== null) change(root.right)
    var left =getDeep(root.left)
    var right = getDeep(root.right)
    if (Math.abs(left - right) < 2) {
        return true
    } else if (left > right) {
        var changeTree = getDeep(root.left.right)
        var noChangeTree = getDeep(root.left.left)
        if (changeTree > noChangeTree) {
            root.left = leftRotate(root.left)
        }
        var newRoot = rightRotate(root)
        newRoot.right = change(newRoot.right)
        newRoot = change(newRoot)
        return newRoot
    } else {
        var changeTree = getDeep(root.right.left)
        var noChangeTree = getDeep(root.right.right)
        if (changeTree > noChangeTree) {
            root.right = rightRotate(root.right)
        }
        var newRoot = leftRotate(root)
        newRoot.left = change(newRoot.left)
        newRoot = change(newRoot)
        return newRoot
    }

}

console.log(isBalance(a))
