/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root, ary = []) {
  if (!root || !root.val) {
      return ary
  }
  inorderTraversal(root.left, ary)
  ary.push(root.val)
  inorderTraversal(root.right, ary)
  return ary
};

// 迭代法 （利用 Stack 的特性）
var inorderTraversal = function(root) {
  const res = []
  const stack = []
  while(root || stack.length) {
    while(root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    res.push(root.val)
    root = root.right
  }
  return res
};