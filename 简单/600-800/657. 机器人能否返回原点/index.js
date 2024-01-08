/**
 * @param {string} moves
 * @return {boolean}
 */
// var judgeCircle = function (moves) {
//     const map = new Map()
//     for (const i of moves) {
//         map.set(i, (map.get(i) || 0) + 1)
//     }
//     return map.get('U') === map.get('D') && map.get('L') === map.get('R')
// };
var judgeCircle = function (moves) {
    let x = 0, y = 0;
    const length = moves.length
    for (let i = 0; i < length; i++) {
        let move = moves.charAt(i);
        if (move === 'U') {
            y--;
        } else if (move === 'D') {
            y++;
        } else if (move === 'L') {
            x--;
        } else if (move === 'R') {
            x++;
        }
    }
    return x === 0 && y === 0;
};
