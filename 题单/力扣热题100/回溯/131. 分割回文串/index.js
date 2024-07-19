/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const len = s.length;
  const ans = [];
  const arr = [];
  const checkPalindrome = (str) => {
    for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
      if (str[i] !== str[j]) return false;
    }
    return true;
  };
  const dfs = (step) => {
    if (step >= len) {
      for (let i = 0; i < arr.length; i++) {
        if (!checkPalindrome(arr[i])) {
          return;
        }
      }
      ans.push([...arr]);

      return;
    }
    arr.push(s[step]);
    dfs(step + 1);
    arr.pop();

    if (step > 0) {
      const c1 = arr.pop();
      arr.push(c1 + s[step]);
      dfs(step + 1);
      const c2 = arr.pop();
      arr.push(c2.slice(0, -1));
    }
  };
  dfs(0);
  return ans;
};
console.log(partition("a"));
