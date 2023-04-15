import { Node } from './node.js';

const Tree = (...arr) => {
  let root = null;

  const sortTree = (unArr) => {
    unArr.sort((a, b) => {
      return a - b;
    });
  };

  const deleteRepeatChars = () => {
    arr = [...new Set(arr)];
  };

  const buildBSTB = (arrN) => {
    if (arrN.length <= 0) {
      return null;
    } else if (arrN.length == 1) {
      return (root = Node(arrN[0]));
    }

    let mid = Math.floor((arrN.length - 1) / 2);
    let left = arrN.slice(0, mid);
    let right = arrN.slice(mid + 1);

    if (left.length >= 1) {
      root = Node(arr[mid], left, right);
      console.log(root);
      buildBSTB(left);
    }
    if (right.length >= 1) {
      root = Node(arr[mid], left, right);
      console.log(root);
      buildBSTB(right);
    }
    return root;
  };

  const buildTree = () => {
    sortTree(arr);
    deleteRepeatChars(arr);
    buildBSTB(arr);
  };

  const getArr = () => arr;

  return {
    getArr,
    buildTree,
  };
};

export { Tree };
