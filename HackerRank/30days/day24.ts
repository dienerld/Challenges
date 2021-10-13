class node24(data) {
	this.data = data;
	this.next = null;
}
class Solution24 {
	removeDuplicates = function (head) {
		//Write your code here
	};

	insert = function (head, data) {
		var p = new node24(data);
		if (head == null) {
			head = p;
		} else if (head.next == null) {
			head.next = p;
		} else {
			var start = head;
			while (start.next != null) {
				start = start.next;
			}
			start.next = p;
		}
		return head;
	};

	display = function (head) {
		var start = head;
		while (start) {
			process.stdout.write(start.data + ' ');
			start = start.next;
		}
	};
}
function main() {
	var T = parseInt(readLine());
	var head = null;
	var mylist = new Solution24();
	for (let i = 0; i < T; i++) {
		var data = parseInt(readLine());
		head = mylist.insert(head, data);
	}
	head = mylist.removeDuplicates(head);
	mylist.display(head);
}
