/**
 * 有序数组的平方
 */




/*
 leetcode 977
 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 示例 1：
 输入：nums = [-4,-1,0,3,10]
 输出：[0,1,9,16,100]
 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]

 示例 2：
 输入：nums = [-7,-3,2,3,11]
 输出：[4,9,9,49,121]
*/


// 对向双指针法
// 排过序的数组，且有可能有负数，所以 平方之后应该是两侧数大，中间数小
function sortedSquares(numbs:number[]) {
  const result: number[] = [];
  const len = numbs.length;
  let left = 0;
  let right = len - 1;
  let k = len - 1;
  while (left <= right) {
    const leftVal = numbs[left] * numbs[left];
    const rightVal = numbs[right] * numbs[right];
    if(leftVal < rightVal) {
      result[k --] = rightVal;
      right --;
    } else {
      result[k --] = leftVal;
      left ++;
    }
  }
  return result;
}

export const nums = [-4,-1,0,3,10]

const arr = sortedSquares(nums)

console.log(arr)


