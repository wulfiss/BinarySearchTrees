import { Node } from './node.js';
import { prettyPrint } from './prettyPrint.js';

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
    if (arrN.length === 0) {
      return null;
    }

    let mid = Math.floor((arrN.length - 1) / 2);
    let left = arrN.slice(0, mid);
    let right = arrN.slice(mid + 1);

    return (root = Node(arrN[mid], buildBSTB(left), buildBSTB(right)));
  };

  const buildTree = () => {
    sortTree(arr);
    deleteRepeatChars(arr);
    buildBSTB(arr);
    prettyPrint(root);
  };

  const insert = (key, node = root) => {
    if (node === null) {
      return Node(key);
    }

    if (node.data === key) {
      return;
    }

    if (node.data > key) {
      node.left = insert(key, node.left);
    }

    if (node.data < key) {
      node.right = insert(key, node.right);
    }

    return node;
  };

  const getArr = () => arr;
  const getRoot = () => root;
  const show = () => prettyPrint(root);

  return {
    buildTree,
    insert,
    getRoot,
    getArr,
    show,
  };
};

export { Tree };
