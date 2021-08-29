// Abstract Classes
abstract class Book {
	title: string;

	author: string;

	constructor(title: string, author: string) {
		if (this.constructor === Book) {
			throw new TypeError(
				"Do not attempt to directly instantiate an abstract class."
			);
		} else {
			this.title = title;
			this.author = author;
		}
	}

	display() {
		console.log("Implement the 'display' method!");
	}
}

class MyBook extends Book {
	price: number;

	constructor(title: string, author: string, price: number) {
		super(title, author);
		this.price = price;
	}

	display() {
		console.log(
			`Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price}`
		);
	}
}

new MyBook("Diener", "Diener", 10).display();
