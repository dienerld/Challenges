function checkMagazine(magazine: string[], note: string[]): void {
	let tracker: any = {};
	for (let i = 0; i < magazine.length; i++) {
		if (!tracker[magazine[i]]) {
			tracker[magazine[i]] = 0;
		}
		tracker[magazine[i]]++;
	}
	for (let i = 0; i < note.length; i++) {
		if (tracker[note[i]]) {
			tracker[note[i]]--;
		} else {
			console.log('No');
			return;
		}
	}
	console.log('Yes');
}

checkMagazine(
	['diener', 'lourenco', 'Dornelas'],
	['diener', 'lourenco', 'Dornelas']
);
