/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    const stack = []

    for (const i of operations) {
        if (i === 'C') {
            stack.pop()
        } else if (i === 'D') {
            stack.push(stack[stack.length - 1] * 2)
        } else if (i === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        } else {
            stack.push(parseInt(i))
        }
    }
    return stack.reduce((pre, cur) => pre + cur, 0)
};
console.log(calPoints(["5","-2","4","C","D","9","+","+"]))
