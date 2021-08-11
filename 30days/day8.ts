interface Dictionary {
	name: String;
	phone: String;
}

function phoneList(contact: String): Dictionary {
	const vecContact = contact.split(' ');
	const contactDictionary: Dictionary = {
		name: vecContact[0],
		phone: vecContact[1],
	};
	return contactDictionary;
}

function main() {
	const n: number = parseInt(readLine());
	let isFind: boolean = false;
	let arr: Dictionary[] = [];
	for (let i = 0; i < n; i++) {
		const string: String = readLine();
		arr.push(phoneList(string));
	}
	for (let i = 0; i < n; i++) {
		const string: String = readLine();
		isFind = false;
		arr.forEach(element => {
			if (element.name == string) {
				console.log(`${element.name}=${element.phone}`);
				isFind = true;
				return;
			}
		});
		if (!isFind) {
			console.log('Not found');
		}
	}
}
