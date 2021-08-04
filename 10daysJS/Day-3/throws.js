class UserException {
	constructor(message) {
		this.message = message;
		this.name = 'UserException';
	}
}
function isPositive(a) {
	if (a > 0) {
		return 'YES';
	} else if (a == 0) {
		throw new UserException('Zero Error');
	} else if (a < 0) {
		throw new UserException('Negative Error');
	}
}

try {
	isPositive(0);
} catch (error) {
	console.error(error.message);
}
