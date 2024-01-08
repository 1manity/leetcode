/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const ans = []
    for (let i = 0; i < img.length; i++) {
        const row = []
        for (let j = 0; j < img[i].length; j++) {
            let cnt = 0,length = 0
            for (let k = -1; k <= 1; k++) {
                for (let l = -1; l <= 1; l++) {
                    if (i+k>=0 && i+k<img.length && j +l>=0 && j+l <img[i].length) {
                        cnt +=img[i+k][j+l]
                        length++
                    }
                }
            }
            row.push(Math.floor(cnt / length))


        }
        ans.push(row)
    }
    return ans
};
