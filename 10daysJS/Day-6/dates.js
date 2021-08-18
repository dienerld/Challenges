function getDayName(dateString) {
	let dayName;
	const date = new Date(dateString);

	const options = {
		weekday: 'long',
	};
	dayName = new Intl.DateTimeFormat('en-US', options).format(date);
	return dayName;
}

console.log(getDayName('10/11/2009'));
