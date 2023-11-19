
function dp(n) {
    const l = [1,1,2]
    for (var i = 3 ;i<n;i++) {
        l.push(l[i-1] + l[i-2])
    }
    return l[n-1]
}
console.log(dp(50))
