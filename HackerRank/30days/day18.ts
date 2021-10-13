class Solution {
	private stack: string[] = [];
	private queue: string[] = [];

	pushCharacter(s: string) {
		this.stack.push(s);
	}
	enqueueCharacter(s: string) {
		this.queue.push(s);
	}

	popCharacter(): string {
		return this.stack.pop();
	}

	dequeueCharacter(): string {
		return this.queue.shift();
	}
}

function main() {
	// read the string s
	const s = readLine();
	const len = s.length;
	// create the Solution class object p
	const obj = new Solution();
	//push/enqueue all the characters of string s to stack
	for (let i = 0; i < len; i++) {
		obj.pushCharacter(s.charAt(i));
		obj.enqueueCharacter(s.charAt(i));
	}

	var isPalindrome = true;
	/*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

	for (let i = 0; i < len / 2; i++) {
		if (obj.popCharacter() != obj.dequeueCharacter()) {
			isPalindrome = false;
			break;
		}
	}
	//finally print whether string s is palindrome or not

	if (isPalindrome) console.log('The word, ' + s + ', is a palindrome.');
	else console.log('The word, ' + s + ', is not a palindrome.');
}
