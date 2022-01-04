const postTraversal = (root, arr = []) => {
  if (root) {
    postTraversal(root.left, arr);
    postTraversal(root.right, arr);
    arr.push(root.val);
  }
  return arr;
}

const postTraversal2 = (root) => {
  // const res = [];
  // const stack = [];
  // let current = root;
  // while (current || stack.length > 0) {
  //   while (current) {
  //     stack.push(current);
  //   }
  // }
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
const res = postTraversal(tree);
const res2 = postTraversal2(tree);
console.log('debug ~ file: index.js ~ line 11 ~ res', res);
console.log('debug ~ file: index.js ~ line 38 ~ res2', res2);