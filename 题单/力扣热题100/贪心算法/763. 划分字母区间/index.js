/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const map = new Map();
  for (let i = s.length - 1; i >= 0; i--) {
    if (!map.has(s[i])) {
      map.set(s[i], i);
    }
  }
  let ans = [];
  let nowBundary = 0;
  let tmp = 0;
  for (let i = 0; i < s.length; i++) {
    const n = map.get(s[i]);
    tmp++;
    nowBundary = Math.max(n, nowBundary);
    if (i === nowBundary) {
      ans.push(tmp);
      tmp = 0;
      nowBundary++;
    }
  }
  return ans;
};
