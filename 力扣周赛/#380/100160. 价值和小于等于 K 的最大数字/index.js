var findMaximumNumber = function (k, x) {
    let ans = 0,arr = []
    for (let i = 0;;i++) {
        if (i<Math.pow(2,x-1)) {
            arr.push(0)
            continue
        }
        const tmp = arr[i>>>x] + ((i>>>(x-1))&1)
        arr.push(tmp)
        ans += tmp
        if (ans >k) {
            return i - 1
        }
    }
};
console.log(findMaximumNumber(7,2));
