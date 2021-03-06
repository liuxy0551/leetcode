/* 9、回文数 简单
判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:
输入: 121
输出: true

示例 2:
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

示例 3:
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */


// 解题  执行用时：244ms，战胜 46.78%；内存消耗：45.3MB，战胜 76.00%
function isPalindrome (num) {
  if (num < 0) {
    return false
  } else {
    let str = num.toString()
    let rightStr = ''
  
    for (let i = str.length - 1; i >= 0; i--) {
      rightStr += str[i]
    }
    
    return str === rightStr
  }
}

console.log(isPalindrome(12321))
console.log(isPalindrome(-121))
console.log(isPalindrome(0))
console.log(isPalindrome(10))



// 题解
function isPalindrome1 (num) {
  // 当 num < 0 时，num 不是回文数，同样的，如果数字最后一位是0，为了使 num 回文，num 第一位也需要为 0，则 0 是回文数
  if (num < 0 || num % 10 === 0 && num !== 0) {
    return false
  }

  let revertedNum = 0
  while (num > revertedNum) {
    revertedNum = revertedNum * 10 + num % 10
    num = Math.floor(num / 10)
  }

  return num === revertedNum || num === Math.floor(revertedNum / 10)
}

console.log(isPalindrome1(12321))
console.log(isPalindrome1(-121))
console.log(isPalindrome1(0))
console.log(isPalindrome1(10))
