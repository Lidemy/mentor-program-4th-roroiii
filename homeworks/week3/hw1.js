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

function solve(n) {
	let temp = '';
	if (n >= 1 && n <= 30) {
		for (let i = 0; i < n; i += 1) {
			temp += '*';
			console.log(temp);
		}
	}
}
