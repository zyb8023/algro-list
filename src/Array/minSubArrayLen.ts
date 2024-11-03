/**
 * 长度最小的子数组
 */

/*
 leetcode 209
 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
 示例：
 输入：s = 7, nums = [2,3,1,2,4,3]
 输出：2
 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
*/

function minSubArrayLen(nums: Array<number>, target: number) {
  const len = nums.length;
  let left = 0, res = Infinity, right = 0, subLen = 0;
  let sum = 0;
  // right是终止区间节点
  while(right < len) {
    sum += nums[right];
    // 满足条件，记录当前区间
    //  遍历调整left
    while(sum >= target) {
      // left和right
      subLen = right - left + 1;
      // 找打最短区间
      res = Math.min(res, subLen);
      // 开始区间后移
      // 区间后移，sum也要减去前区间
      sum -= nums[left++];
    }
    right ++;
  }
  return res === Infinity ? 0 : res;
}

export const s = 7, nums = [2,3,1,2,4,3]
const res = minSubArrayLen(nums, s);
console.log(res);