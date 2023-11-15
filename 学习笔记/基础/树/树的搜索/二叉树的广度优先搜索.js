function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");
var g = new Node("g");

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

function breadthSearch(roots , target) {
    if (roots === null || roots.length === 0 ) return false
    var childList = []
    for (let i = 0; i < roots.length; i++) {
        if (roots[i] !== null && roots[i].value === target) return true
        else {
            childList.push(roots[i].left)
            childList.push(roots[i].right)
        }
    }
    return breadthSearch(childList, target)
}
console.log(breadthSearch([a],'f'))
