import { BinarySearchTree } from 'binary-search-tree';

describe('Binary search tree', () => {
  let array;

  beforeEach(() => {
    array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

    // unique and sorted version
    // [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]
  });

  describe('Build tree', () => {
    test('Returns the root node', () => {
      let root = new BinarySearchTree(array).root;

      expect(root.value).toBe(8);
      expect(root.left.value).toBe(4);
      expect(root.right.value).toBe(67);
    });
  });

  describe('Includes', () => {
    let binaryTree;
    beforeEach(() => {
      binaryTree = new BinarySearchTree(array);
    });

    test('Returns true for existing value', () => {
      expect(binaryTree.includes(6345)).toBe(true);
    });

    test('Returns false for non existing value', () => {
      expect(binaryTree.includes(2)).toBe(false);
    });

    test('Return false if value is not provided', () => {
      expect(binaryTree.includes()).toBe(false);
    });
  });

  describe('Insert', () => {
    let binaryTree;
    beforeEach(() => {
      binaryTree = new BinarySearchTree(array);
    });

    test('Insert new value', () => {
      expect(binaryTree.includes(2)).toBe(false);

      binaryTree.insert(2);
      expect(binaryTree.includes(2)).toBe(true);
    });

    test('Do nothing when the value exist in the tree', () => {
      let originalRoot = structuredClone(binaryTree.root);
      binaryTree.insert(5);

      expect(binaryTree.root).toEqual(originalRoot);
    });
  });
});
