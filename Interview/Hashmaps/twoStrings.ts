function twoStrings(s1: string, s2: string): string {
	let tracker: any = {};

	for (let i = 0; i < s1.length; i++) {
		if (!tracker[s1[i]]) {
			tracker[s1[i]] = 0;
		}
		tracker[s1[i]]++;
	}
	for (let i = 0; i < s2.length; i++) {
		if (tracker[s2[i]]) {
			tracker[s2[i]]--;
			return 'Yes';
		}
	}
	return 'No';
}
