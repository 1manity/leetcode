/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "]") {
      stack.push(s[i]);
    } else {
      let tmp = "";
      while (stack[stack.length - 1] !== "[") {
        tmp = stack.pop() + tmp;
      }
      stack.pop();
      let tmpNum = "";
      while (
        stack.length > 0 &&
        stack[stack.length - 1] >= "0" &&
        stack[stack.length - 1] <= "9"
      ) {
        tmpNum = stack.pop() + tmpNum;
      }
      for (let i = 0; i < Number(tmpNum); i++) {
        stack.push(tmp);
      }
    }
  }
  return stack.join("");
};
