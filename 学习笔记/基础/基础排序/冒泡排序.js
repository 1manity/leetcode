const arr = [1,2,4,3,7,6,5,8]

for (let i=0 ; i<arr.length;i++) {
    for (let j = i ;j<arr.length - i - 1;j++) {
        if (arr[j]>arr[j+1]) {
            arr[j] += arr[j+1]
            arr[j+1] = arr[j]- arr[j+1]
            arr[j] -= arr[j+1]
        }
    }
}
console.log(arr)
