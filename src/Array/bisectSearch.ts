/**
 * 二分查找
 */

/*
 对应leetcode 704
 
 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 示例:
 输入: nums = [-1,0,3,5,9,12], target = 9
 输出: 4
 解释: 9 出现在 nums 中并且下标为 4
*/

/**
 * 左闭右闭写法 [left, right]
 * @param nums
 * @param target
 */
function bisectSearch(nums: number[], target: number ) {
   let left = 0;
   let right = nums.length - 1;
   while (left <= right) {
     // 有符号右移，相当于Math.floor((left + right) / 2的1次方)
     let middle = (left + right) >> 1;
     if(nums[middle] > target) {
        // 目标在左区间， 缩小区间
       right = middle - 1; // target 在左区间，所以[left, middle - 1]
     } else if(nums[middle] < target) {
        //目标在右区间， 缩小区间
       left = middle + 1; // target 在右区间，所以[middle + 1, right]
     } else {
       return middle;
     }
   }
   return -1;
}


export const nums = [-1,0,3,5,9,12], target = 9;
console.log(bisectSearch(nums, target))

/*
* 总结：区间边界是关键， 在区间调整中要保证新的区间边界能满足初始区间条件
* */