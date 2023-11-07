/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const arr = (s+'&').split('');
    let ans = 0;
    for(let i = 0;i<arr.length ;i++) {
        if (arr[i] === 'M') {
            ans+=1000;
        }
        else if (arr[i] === 'D') {
            ans+=500;
        }
        else if (arr[i] === 'C') {
            if(arr[i+1] === 'D') {
                ans+=400;
                i+=1;
                continue;
            }
            if(arr[i+1] === 'M') {
                ans+=900;
                i+=1;
                continue;
            }
            ans+=100;
        }
        else if (arr[i] === 'L') {
            ans+=50;
        }
        else if (arr[i] === 'X') {
            if(arr[i+1] === 'L') {
                ans+=40;
                i+=1;
                continue;
            }
            if(arr[i+1] === 'C') {
                ans+=90;
                i+=1;
                continue;
            }
            ans+=10;
        }
        else if (arr[i] === 'V') {

            ans+=5;
        }
        else if (arr[i] === 'I') {
            if(arr[i+1] === 'V') {
                ans+=4;
                i+=1;
                continue;
            }
            if(arr[i+1] === 'X') {
                ans+=9;
                i+=1;
                continue;
            }
            ans+=1;
        }
    }
    return ans;
};

console.log(romanToInt("IV"))