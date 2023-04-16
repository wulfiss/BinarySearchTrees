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
    } else if (node.data === key) {
      return node;
    } else {
      if (node.data > key) {
        node.left = insert(key, node.left);
      }

      if (node.data < key) {
        node.right = insert(key, node.right);
      }

      return node;
    }
  };

  const Delete = (value, node = root) => {
    if (node === null) {
      return node;
    }

    if (node.data === value) {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null && node.right !== null) {
        node = node.right;
        return node;
      }

      if (node.right === null && node.left !== null) {
        node = node.left;
        return node;
      }
    }

    if (node.data > value) {
      node.left = Delete(value, node.left);
    }

    if (node.data < value) {
      node.right = Delete(value, node.right);
    }

    return node;
  };

  const getArr = () => arr;
  const getRoot = () => root;
  const show = () => prettyPrint(root);

  return {
    buildTree,
    insert,
    Delete,
    getRoot,
    getArr,
    show,
  };
};

export { Tree };
