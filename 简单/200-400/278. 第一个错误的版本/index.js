/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 0, right = n
        while (left < right) {
            let tmp = Math.floor((left + right) / 2)
            if (isBadVersion(tmp)) {
                right = tmp
            } else {
                left = tmp + 1
            }
        }
        return right
    };
};
