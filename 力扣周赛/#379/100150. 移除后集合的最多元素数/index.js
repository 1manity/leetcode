/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumSetSize = function(nums1, nums2) {
    let map1 = new Map();
    let map2 = new Map();

    for (let num of nums1) {
        map1.set(num, (map1.get(num) || 0) + 1);
    }

    for (let num of nums2) {
        map2.set(num, (map2.get(num) || 0) + 1);
    }

    let cnt = nums1.length / 2
    // console.log(map1,cnt)
    map1.forEach((val,key)=> {
        if (val > 1) {
            cnt =cnt - val + 1
            map1.set(key,1)
        }
    })
    map1.forEach((val,key)=> {
        if ((map2.get(key)||0)>0 && cnt>0) {
            cnt = cnt -val
            map1.set(key,0)
            // console.log('v -' ,val, cnt)
        }
    })

    // console.log(map1,cnt)
    if (cnt>0) {
        for (let [key, value] of map1) {
            cnt = cnt -value
            map1.set(key,0)
            if (cnt<= 0) break
        }
    }


    cnt = nums1.length / 2
    map2.forEach((val,key)=> {
        if (val > 1) {
            cnt =cnt - val + 1
            map2.set(key,1)
        }
    })
    map2.forEach((val,key)=> {
        if ((map1.get(key)||0)>0 && cnt>0) {
            cnt = cnt -val
            map2.set(key,0)
        }
    })

    if (cnt>0) {
        for (let [key, value] of map2) {
            cnt = cnt -value
            map2.set(key,0)
            if (cnt<= 0) break
        }
    }
    // console.log(map1,map2)
    let ans = 0
    map2.forEach((val, key) => {
        if (map1.has(key)) {
            map1.set(key, map1.get(key) + val);
        } else {
            map1.set(key, val);
        }
    });

    map1.forEach((val, key) => {
        if (val > 0) ans++;
    });
    // console.log(map1)
    return ans
};

console.log(maximumSetSize(nums1 = [2,1,14,14,8,36,7,3,23,37] , [45,4,14,32,39,20,2,10,34,2]))
