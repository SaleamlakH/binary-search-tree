import { Node } from './node.js';

export class BinarySearchTree {
  #root;

  constructor(array) {
    array = this.#uniqueAndSort(array);
    this.#root = this.#buildTree(array);
  }

  get root() {
    return this.#root;
  }

  #uniqueAndSort(array) {
    return array
      .filter((value, index) => array.indexOf(value) === index)
      .sort((a, b) => a - b);
  }

  #buildTree(array) {
    if (!array.length) return null;

    let mid = Math.floor((array.length - 1) / 2);

    // build node
    let root = new Node(array[mid]);
    root.left = this.#buildTree(array.slice(0, mid));
    root.right = this.#buildTree(array.slice(mid + 1));

    return root;
  }
}
