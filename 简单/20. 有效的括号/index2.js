/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let ss = s;
    while (1){
        if (ss.includes('()')|| ss.includes('[]') ||ss.includes('{}')) {
            ss =ss.replace('()','');
            ss =ss.replace('[]','');
            ss =ss.replace('{}','');
            continue;
        }
        return ss ==='';

    }
};
console.log(isValid("["))