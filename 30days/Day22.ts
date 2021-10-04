/*
 * Day 22: Binary Search Trees
 */

class node {
	data: number;
	left: node;
	right: node;

	constructor(data: number) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

// Start of function BinarySearchTree
class Tree {
	private root: node;

	insert = (root: node, data: number) => {
		if (root === null) {
			this.root = new node(data);

			return this.root;
		}

		if (data <= root.data) {
			if (root.left) {
				this.insert(root.left, data);
			} else {
				root.left = new node(data);
			}
		} else {
			if (root.right) {
				this.insert(root.right, data);
			} else {
				root.right = new node(data);
			}
		}

		return this.root;
	};

	// Start of function getHeight
	getHeight = (root: node) => {
		let rightRight = 0,
			leftLeft = 0;
		let aux_root = root;
		while (aux_root !== null) {
			rightRight += 1;
			aux_root = aux_root.right;
		}
		aux_root = root.left;
		while (aux_root !== null) {
			leftLeft += 1;
			aux_root = aux_root.left;
		}
		return leftLeft > rightRight ? leftLeft : rightRight;
	};
}

function main() {
	const inputLines = [13, 25, 39, 12, 19, 9, 23, 55, 31, 60, 35, 41, 70, 90];

	var tree = new Tree();
	var root = null;
	let i = 0;
	const values: number[] = [];
	inputLines.forEach((item) => values.push(item));

	for (i = 0; i < values.length; i++) {
		root = tree.insert(root, values[i]);
	}

	console.log(tree.getHeight(root));
	// Enter your code here
}
main();
