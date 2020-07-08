const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
	input: process.stdin,
});

rl.on('line', (line) => {
	lines.push(line);
});

rl.on('close', () => {
	/* eslint-disable-next-line */
	solve(lines);
});
// 字串長度
function digits(x) {
	const str = x.toString().length;
	return str;
}
// 把字串拆成一個一個數字
function splitStr(y) {
	const str2 = y.toString().split('');
	return str2;
}

function solve(input) {
	const num = input[0].split(' ');
	const n = Number(num[0]);
	const m = Number(num[1]);

	for (let i = n; i < m; i += 1) {
		const ilength = digits(i);
		const strArr = splitStr(i);
		let sum = 0;
		strArr.forEach((z) => {
			sum += z ** ilength; // **代表次方
			return sum;
		});
		if (sum === i) {
			console.log(i);
		}
	}
}
