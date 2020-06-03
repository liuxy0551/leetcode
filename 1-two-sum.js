/* 1、两数之和  简单
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9，所以返回 [0, 1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */


// 题解 执行用时：124ms，战胜 51.67%；内存消耗：35.4MB，战胜 22.88%
function twoSum1 (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j]
      }
    }
  }
}
let result1 = twoSum1([2, 7, 11, 15], 9)
console.log(result1)

// 解题 执行用时：224ms，战胜 13.00%；内存消耗：35.4MB，战胜 20.34%
function twoSum2 (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

let result2 = twoSum2([2, 7, 11, 15], 9)
console.log(result2)