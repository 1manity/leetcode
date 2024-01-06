/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const tmp = [...score]
    const map = new Map()
    score.sort((a,b)=>b-a)
    for (let i = 0;i<score.length;i++) {
        if (i === 0)
            map.set(score[i],"Gold Medal")
        else if (i === 1)
            map.set(score[i],"Silver Medal")
        else if (i === 2)
            map.set(score[i],"Bronze Medal")
        else {
            map.set(score[i],`${i+1}`)
        }
    }
    return tmp.map(i=>map.get(i))
};
console.log(findRelativeRanks([10,3,8,9,4]))
