/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target <  nums[0]) return  0;
    if (target > nums[nums.length - 1]) return nums.length;
    let left = 0 , right = nums.length - 1;
    let mid = 0;
    while(left<=right){
        mid = Math.floor((left + right)/2)
        if(nums[mid] === target){
            return mid
        }else if(nums[mid] < target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    if(nums[mid] < target) {
        return  mid + 1
    }
    else  {
        return mid
    }

};

console.log(searchInsert([1,3], 2))
