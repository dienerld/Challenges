/*
 * Day 15: Linked List
 */

class Nodes {
	data: number;
	next: any;

	constructor(data: number) {
		this.data = data;
		this.next = null;
	}
}
class Solution {
	insert(head: any, data: number) {
		const newNode = new Nodes(data);

		if (head === null || typeof head === 'undefined') {
			head = newNode;
		} else if (head.next === null) {
			head.next = newNode;
		} else {
			let { next } = head;
			while (next.next) {
				next = next.next;
			}
			next.next = newNode;
		}

		return head;
	}

	display(head: any) {
		let start = head;

		while (start) {
			process.stdout.write(`${start.data} `);
			start = start.next;
		}
	}
}
function main() {
	const T = parseInt(readLine());
	let head: any = null;
	const mylist = new Solution();

	for (let i = 0; i < T; i++) {
		const data = parseInt(readLine());
		head = mylist.insert(head, data);
	}
	mylist.display(head);
}
