import BinarySearchTree from "./tree";
import traverse from "./traverse";
const tes = new BinarySearchTree();

tes.insert(9);
tes.insert(4);
tes.insert(6);
tes.insert(20);
tes.insert(170);
tes.insert(15);
tes.insert(1);
console.log(JSON.stringify(traverse(tes.root)));
