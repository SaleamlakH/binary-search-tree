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

  includes(value) {
    let node = this.#root;
    while (node) {
      if (node.value === value) return true;

      node = value > node.value ? node.right : node.left;
    }

    return false;
  }

  insert(value) {
    let node = this.#root;
    while (node) {
      if (node.value === value) return;

      if (value > node.value) {
        node.right = node.right || new Node(value);
        node = node.right;
      } else {
        node.left = node.left || new Node(value);
        node = node.left;
      }
    }
  }
}
