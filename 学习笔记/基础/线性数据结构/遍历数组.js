

const arr = [1, 2, 3, 4, 5]

// 循环遍历
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// 递归遍历
function bianArr(arr, i) {
    if (arr == null || arr.length <= i) return;
    console.log(arr[i]);
    bianArr(arr, i + 1);
}
