/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const dict = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const ans = [];
  const num = digits.length;
  const word = [];
  if (num === 0) {
    return ans;
  }
  const dfs = (count) => {
    if (count >= num) {
      ans.push(word.join(""));
      return;
    }

    dict[digits[count]].forEach((v) => {
      word.push(v);
      dfs(count + 1);
      word.pop();
    });
  };
  dfs(0);
  return ans;
};
console.log(letterCombinations("23"));
