/**
 * 移除数组元素
 */

/*

  对应leetcode 27

 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素。元素的顺序可能发生改变。然后返回 nums 中与 val 不同的元素的数量。
 假设 nums 中不等于 val 的元素数量为 k，要通过此题，您需要执行以下操作：
 更改 nums 数组，使 nums 的前 k 个元素包含不等于 val 的元素。nums 的其余元素和 nums 的大小并不重要。
 返回 k。
*/

// 双指针法
// 快指针：寻找新数组的元素 ，新数组就是不含有目标元素的数组
// 慢指针：指向更新 新数组下标的位置

function removeElement(nums: number[], val: number): number {
  // 慢指针
  let slow = 0, fast = 0;
  const len = nums.length;
  while (fast< len) {
    if(val !== nums[fast]) {
      nums[slow ++] = nums[fast];
    }
    fast ++;
  }
  return slow;
}

export const nums = [3, 2, 2, 3];
const val = 3;
removeElement(nums, val);