var strStr = function(haystack, needle) {
    // 前缀表next数组,用来记录当前位置匹配失败，应跳到与其相同的前缀的后面重新匹配
    //1.求前缀表,next[i]表示i之前最长相等的前后缀长度
    let next = [0];
    let j = 0;  //j指向前缀末尾
    for(let i = 1; i < needle.length; i++) {
        // 前后缀不相同，向前回退
        while(j > 0 && needle[i] !== needle[j]) {
            j = next[j - 1];
        }
        //前后缀相同
        if(needle[i] === needle[j]) {
            j++;
        }
        next[i] = j;
    }
    //2.利用next进行匹配
    j = 0;
    for(let i = 0; i < haystack.length; i++) {
        while(j > 0 && haystack[i] !== needle[j]) {
            j = next[j - 1];
        }
        if(haystack[i] === needle[j]) {
            j++;
        }
        if(j === needle.length) {   //找到
            return (i - needle.length + 1);
        }
    }
    return -1;
};
