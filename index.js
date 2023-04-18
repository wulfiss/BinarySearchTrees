import { Tree } from './modules/binarySearchTree.js';

const randomValue = () => {
  let arr = [];
  for (let i = 0; i < 15; i += 1) {
    arr.push(Math.floor(Math.random() * 1000));
  }
  return arr;
};

let test = Tree(randomValue());

test.buildTree();
console.log(test.isBalanced());
console.log(test.levelOrder());
console.log(test.inOrder());
console.log(test.preOrder());
console.log(test.preOrder());

for (let j = 0; j < 200; j += 1) {
  test.insert(Math.floor(Math.random() * 1000));
}

test.show();
console.log(test.isBalanced());
console.log('--------------------------');
console.log('--------------------------');
test.reBalance();
console.log(test.isBalanced());
