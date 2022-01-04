// 中序遍历
const inorderTraversal = (root, arr = []) => {
  if (root) {
    inorderTraversal(root.left, arr);
    arr.push(root.val);
    inorderTraversal(root.right, arr);
  }
  return arr;
};

// 非递归
const inorderTraversal2 = (root) => {
  const res = [];
  const stack = [];
  let current = root;
  while(current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    res.push(current.val);
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
const res = inorderTraversal(tree);
const res2 = inorderTraversal2(tree);
console.log('debug ~ file: index.js ~ line 11 ~ res', res);
console.log('debug ~ file: index.js ~ line 38 ~ res2', res2);

