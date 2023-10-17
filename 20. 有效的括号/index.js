/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = "",top=0;
    for (let i=0;i<s.length;i++) {

        if(s[i] === '('||s[i] === '['||s[i] === '{') {
            arr +=s[i];
        }
        else if (s[i]===')') {
            if(!arr.endsWith('(')) return false;
            arr=arr.slice(0,arr.length-1);
        }
        else if (s[i]===']') {

            if(!arr.endsWith('[')) return false;
            arr=arr.slice(0,arr.length-1);

        }
        else if (s[i]==='}') {
            if(!arr.endsWith('{')) return false;
            arr=arr.slice(0,arr.length-1);
        }
    }

    return arr === ''
};
console.log(isValid("["))