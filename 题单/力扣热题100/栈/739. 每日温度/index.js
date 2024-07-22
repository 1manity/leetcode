var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const ans = new Array(n).fill(0);
  const st = [];
  for (let i = 0; i < n; i++) {
    const t = temperatures[i];
    while (st.length && t > temperatures[st[st.length - 1]]) {
      const j = st.pop();
      ans[j] = i - j;
    }
    st.push(i);
  }
  return ans;
};
