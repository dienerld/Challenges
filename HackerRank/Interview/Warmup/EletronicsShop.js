function getMoneySpent(keyboards, drives, b) {
	let spent = -1;
	keyboards.forEach(keyboard => {
		drives.forEach(driver => {
			if (keyboard + driver > spent && keyboard + driver <= b) {
				spent = keyboard + driver;
			}
		});
	});
	return spent;
}

const keyboards = [5, 2, 8];
const drives = [3, 1];
const b = 10;
console.log(getMoneySpent(keyboards, drives, b));
