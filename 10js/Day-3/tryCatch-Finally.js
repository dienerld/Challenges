function reverseString(s) {
	try {
		s = s.split('');
		s.reverse();
		s = s.join('');
	} catch (error) {
		console.log(error.message);
	} finally {
		console.log(s);
	}
}

reverseString(123);
