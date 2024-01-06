/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const line1 = "qwertyuiopQWERTYUIOP"
    const line2 = "asdfghjklASDFGHJKL"
    const line3 = "zxcvbnmZXCVBNM"

    const ans = []
    for (const word of words) {
        const wordlist = word.split('')
        let cnt,flag= true
        if (line1.includes(wordlist[0])) cnt = line1
        else if (line2.includes(wordlist[0])) cnt = line2
        else if (line3.includes(wordlist[0])) cnt = line3
        else cnt  = ''

        for (const i of wordlist) {
            if (!cnt.includes(i)) {
                flag = false
            }
        }

        if (flag) {
            ans.push(word)
        }
    }
    return ans
};
// const line = [1,2,3]
console.log(findWords(["Hello","Alaska","Dad","Peace"]))

// const cnt  = 'line';
// console.log(cnt.includes('l'))
