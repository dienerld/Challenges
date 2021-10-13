/*
 * Day 8: Dictionaries and Maps
 */
function main() {
	const n: number = parseInt(readLine());
	const phoneList: any = {};
	for (let i = 0; i < n; i++) {
		const stringNumber: string[] = readLine().split(' ');
		phoneList[stringNumber[0]] = stringNumber[1];
	}
	for (let i = 0; i < n; i++) {
		const stringName: string = readLine();
		if (stringName in phoneList) {
			console.log(`${stringName}=${phoneList[stringName]}`);
		} else {
			console.log('Not found');
		}
	}
}
