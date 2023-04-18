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

      if (node.right && node.left) {
        let tmp = node.right;
        let prev = null;
        while (tmp !== null) {
          prev = tmp;
          tmp = tmp.left;
        }
        Delete(prev.data);
        node.data = prev.data;
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

  const find = (value, node = root) => {
    let tmp = null;
    if (node.data === value) {
      return node;
    } else if (node === null) {
      return null;
    } else {
      if (node.data < value) {
        tmp = find(value, node.right);
      }

      if (node.data > value) {
        tmp = find(value, node.left);
      }
    }
    return tmp;
  };

  //From root head goes down visiting every child on the level before going to the next level,
  //breadth-first top to bottom.
  const levelOrder = (callBack, node = root) => {
    let tmpArr = [];
    let arr = [];
    let currNode = null;

    tmpArr.push(node);

    while (tmpArr.length > 0) {
      currNode = tmpArr.shift();

      if (callBack) {
        arr.push(callBack(currNode.data));
      } else {
        arr.push(currNode.data);
      }

      if (currNode.left) {
        tmpArr.push(currNode.left);
      }

      if (currNode.right) {
        tmpArr.push(currNode.right);
      }
    }
    return arr;
  };
  //Visit every branch to the end before going to the next branch.
  //Depth-First - INORDER <left><root><right>
  const inOrder = (callBack, node = root, arr = []) => {
    if (node === null) {
      return;
    }

    if (node.left) {
      inOrder(callBack, node.left, arr);
    }

    if (callBack) {
      arr.push(callBack(node.data));
    } else {
      arr.push(node.data);
    }

    if (node.right) {
      inOrder(callBack, node.right, arr);
    }

    return arr;
  };
  //Visit every node in preOrder
  //Depth-First - PREORDER <root><left><right>
  const preOrder = (callBack, node = root, arr = []) => {
    if (node === null) {
      return;
    }

    if (callBack) {
      arr.push(callBack(node.data));
    } else {
      arr.push(node.data);
    }

    if (node.left) {
      preOrder(callBack, node.left, arr);
    }

    if (node.right) {
      preOrder(callBack, node.right, arr);
    }
    return arr;
  };
  //Depth-First - postORDER <left><right><root>
  const postOrder = (callBack, node = root, arr = []) => {
    if (node === null) {
      return;
    }

    if (node.left) {
      postOrder(callBack, node.left, arr);
    }

    if (node.right) {
      postOrder(callBack, node.right, arr);
    }

    if (callBack) {
      arr.push(callBack(node.data));
    } else {
      arr.push(node.data);
    }

    return arr;
  };

  const height = (node = root, left = 0, right = 0) => {
    if (node === null) {
      return 0;
    }
    if (node.left) {
      left = height(node.left, left) + 1;
    }
    if (node.right) {
      right = height(node.right, right) + 1;
    }

    if (left >= right) {
      return left;
    } else {
      return right;
    }
  };

  const depth = (value, node = root, dpth = 0) => {
    if (node === null) {
      return null;
    }

    if (node.data < value) {
      dpth = depth(value, node.right, dpth) + 1;
    }

    if (node.data > value) {
      dpth = depth(value, node.left, dpth) + 1;
    }

    return dpth;
  };

  const isBalanced = (node = root, left = 0, right = 0) => {
    if (node === null) {
      return 0;
    }
    if (node.left) {
      left = height(node.left, left) + 1;
    }
    if (node.right) {
      right = height(node.right, right) + 1;
    }

    let diff = left - right;

    if (diff === 0 || diff === -1 || diff === 1) {
      return true;
    } else {
      return false;
    }
  };
  const getArr = () => arr;
  const getRoot = () => root;
  const show = () => prettyPrint(root);

  return {
    buildTree,
    insert,
    Delete,
    find,
    levelOrder,
    inOrder,
    preOrder,
    postOrder,
    height,
    depth,
    isBalanced,
    getRoot,
    getArr,
    show,
  };
};

export { Tree };
