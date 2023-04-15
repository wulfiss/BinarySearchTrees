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
    if (arrN.length < 2) {
      return arrN[0];
    }

    let mid = Math.floor((arrN.length - 1) / 2);
    let left = arrN.slice(0, mid) || null;
    let right = arrN.slice(mid + 1) || null;

    return (root = Node(arrN[mid], buildBSTB(left), buildBSTB(right)));
  };

  const buildTree = () => {
    sortTree(arr);
    deleteRepeatChars(arr);
    return buildBSTB(arr);
  };

  const getArr = () => arr;

  return {
    getArr,
    buildTree,
  };
};

export { Tree };
