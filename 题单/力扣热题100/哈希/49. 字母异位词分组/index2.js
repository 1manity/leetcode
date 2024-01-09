var groupAnagrams = function(strs) {
    const map = new Map()
    for (const str of strs) {
        let array = Array.from(str)
        array.sort()
        const key = array.join('')
        const list = map.get(key)?map.get(key):[]
        list.push(str)
        map.set(key,list)
    }
    return Array.from(map.values())
};

