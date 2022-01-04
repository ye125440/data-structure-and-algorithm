const preorderTraversal = (root, arr = []) => {
  if (root) {
    arr.push(root.val);
    preorderTraversal(root.left, arr);
    preorderTraversal(root.right, arr);
  }
  return arr;
}

const preorderTraversal2 = (root) => {
  const res = [];
  const stack = [];
  let current = root;
  while(current || stack.length > 0) {
    while (current) {
      res.push(current.val);
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    current = current.right;
  }
  return res;
}

const tree = {
  val: 1,
  right: {
    val: 2,
    left: {
      val: 3
    }
  }
}
const res = preorderTraversal(tree);
const res2 = preorderTraversal2(tree);
console.log('debug ~ file: index.js ~ line 11 ~ res', res);
console.log('debug ~ file: preorder-traversal.js ~ line 34 ~ res2', res2);