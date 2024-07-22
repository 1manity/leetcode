/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      stack.push(s[i]);
      continue;
    }
    if (stack.length === 0) return false;
    const node = stack.pop();
    if (
      (s[i] === "}" && node !== "{") ||
      (s[i] === "]" && node !== "[") ||
      (s[i] === ")" && node !== "(")
    ) {
      return false;
    }
  }
  if (stack.length > 0) return false;
  return true;
};
