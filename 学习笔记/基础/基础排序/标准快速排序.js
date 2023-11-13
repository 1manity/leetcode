var arr = [4,1,6,9,3,2,8,7];

function quickSort(arr, begin, end) {
    if (begin >= end -1) return
    let left = begin
    let right = end
    do {
        do {left ++}while (left < right && arr[left] < arr[begin])
        do {right --}while (left < right && arr[right] > arr[begin])
        if (left < right)  {
            var tmp = arr[left]
            arr[left] = arr[right]
            arr[right] = tmp
        }
    }while (left < right)
    var swapPoint = left === right ? right - 1 : right
    var tmp = arr[begin]
    arr[begin] = arr[swapPoint]
    arr[swapPoint] = tmp
    quickSort(arr, begin, swapPoint)
    quickSort(arr, swapPoint + 1, end)
}

quickSort(arr, 0, arr.length)
console.log(arr)
