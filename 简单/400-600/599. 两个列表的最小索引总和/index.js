/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    const map = new Map()
    let min = Number.MAX_SAFE_INTEGER, minList = []
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i)
    }
    for (let i = 0; i < list2.length; i++) {
        if (map.has(list2[i])) {
            if (i + map.get(list2[i]) > min) continue
            if (i + map.get(list2[i]) < min){
                min = i + map.get(list2[i])

                minList = []
            }

            minList.push(list2[i])
        }
    }
    return minList
};
console.log(findRestaurant(list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],list2 = ["KFC", "Shogun", "Burger King"]))
