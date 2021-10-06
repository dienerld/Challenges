// const inputLines = [13, 25, 39, 12, 19, 9, 23, 55, 31, 60, 35, 41, 70, 90];

function readLine(): string {
	return inputLines[currentLine++];
}

/*
 * Day 23: Binary Search Trees - Level-Order Traversal
 */

class node1 {
	data: number;
	left: node1;
	right: node1;
	level: number;

	constructor(data: number, level: number) {
		this.data = data;
		this.left = null;
		this.right = null;
		this.level = level;
	}
}

// Start of function BinarySearchTree
class Tree1 {
	private root: node1;

	insert = (root: node1, data: number, level: number = 0) => {
		if (root === null) {
			this.root = new node1(data, level);

			return this.root;
		}

		if (data <= root.data) {
			level += 1;
			if (root.left) {
				this.insert(root.left, data, level);
			} else {
				root.left = new node1(data, level);
			}
		} else {
			level += 1;
			if (root.right) {
				// level += 1;
				this.insert(root.right, data, level);
			} else {
				root.right = new node1(data, level);
			}
		}

		return this.root;
	};

	getTree(root: node1) {
		if (!root) return;
		else {
			const data = {
				data: root.data,
				level: root.level,
			};
			vecData.push(data);
		}
		this.levelOrder(root.left);
		this.levelOrder(root.right);
	}
	levelOrder = (root: node1) => {
		this.getTree(root);
		vecData.sort((a, b) => a.level - b.level);

		return vecData.map((item) => item.data);
	};
}

const vecData: { data: number; level: number }[] = [];
function main() {
	var tree = new Tree1();
	let root = null;
	let i = 0;
	const values: number[] = [];
	inputLines.forEach((item) => values.push(parseInt(item)));

	for (i = 1; i < values.length; i++) {
		root = tree.insert(root, values[i]);
	}
	console.log(tree.levelOrder(root).join(' '));
}
// main();
