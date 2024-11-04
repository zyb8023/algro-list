/**
 * 三数求和
 */

/*
 真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 注意：答案中不可以包含重复的三元组。

 示例： 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
*/

// 双指针区间法
function threeSum(nums: number[]) {
  // 先排序
  const len = nums.length;
  nums = nums.sort((a, b) => a - b);
  const result: number[][] = [];
  for (let i = 0; i < len; i++) {
    // 排序后 nums[i]大于零了，后边的值相加一定大于零，直接return
    if (nums[i] > 0) {
      return result;
    }
    // 去重，只能向前去重
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = len - 1;
    while(left < right) {
      // 相加大于零，右侧指针左移
      if (nums[i] + nums[left] + nums[right] > 0) right--;
      // 左侧指针右移
      else if (nums[i] + nums[left] + nums[right] < 0) left++;
      // 相等
      else {
        result.push([nums[i], nums[left], nums[right]]);
        right --;
        left ++;
        while (nums[right] === nums[right + 1]) {
          right--;
        }
        while (nums[left] === nums[left - 1]) {
          left++;
        }

      }
    }
  }
  return result;
}


const nums = [-1, 0, 1, 2, -1, -4]

const res = threeSum(nums);

console.log(res);