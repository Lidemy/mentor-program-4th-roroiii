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

/* global BigInt */
function solve(input) {
	for (let i = 1; i <= input[0]; i += 1) {
		const arr = input[i].split(' ');
		const a = BigInt(arr[0]);// 使用BigInt設定最大數
		const b = BigInt(arr[1]);
		const k = Number(arr[2]);
		if (a === b) {
			console.log('DRAW');
		} else if (k === 1) {
			console.log(a > b ? 'A' : 'B');
			// console.log(a < b ? 'B' : 'A'); 輸出結果是一樣的，所以不用寫兩次判斷
		} else {
			console.log(a < b ? 'A' : 'B');
			// console.log(a > b ? 'B' : 'A');
		}
	}
}
