/**
 * 合并两个有序数组
 */



/*
 真题描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 示例: 输入:
   nums1 = [1,2,3,0,0,0], m = 3
 nums2 = [2,5,6], n = 3
 输出: [1,2,2,3,5,6]
*/

function mergeArray(nums1: number[],m:number, nums2: number[], n:number): number[] {
  // 定义两个指针，都指向对应数组有效部分的末尾
  // 原数组本身就是排序的，最后两个值比较，谁大，谁就是新数组最大的
  let pointer1 = m - 1, pointer2 = n - 1, k = m + n - 1;
  while (pointer1 >= 0 && pointer2 >=0) {
    if(nums1[pointer1] >= nums2[pointer2]) {
      nums1[k -- ] = nums1[pointer1 --];
    } else {
      nums1[k --] = nums2[pointer2 --];
    }
  }
  // 遍历完之后只剩下point2
  while (pointer2 >=0) {
    nums1[k -- ] = nums1[pointer2 --];
  }
  return nums1;
}


// test

const nums1 = [1,2,3,0,0,0], m = 3,  nums2 = [2,5,6], n = 3;

console.log(mergeArray(nums1, m, nums2, n));