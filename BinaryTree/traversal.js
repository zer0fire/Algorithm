// function Tree(val) {
//   this.val = val
//   this.left = null
//   this.right = null
// }

function frontOrder(tree, fn) {
  if (tree) {
    fn(tree)
    frontOrder(tree.left)
    frontOrder(tree.right)
  }
}

function inOrder(tree) {
  if (tree) {
    inOrder(tree.left)
    fn(tree)
    inOrder(tree.right)
  }
}

function postOrder(tree) {
  if (tree) {
    postOrder(tree.left)
    postOrder(tree.right)
    fn(tree)
  }
}